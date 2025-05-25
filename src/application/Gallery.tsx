import { createUseStyles, useTheme } from "react-jss";
import { Dispatch, SetStateAction, SyntheticEvent, useEffect, useMemo, useState } from "react";
import { GalleryViewer } from "../components/GalleryViewer";
import { Modal } from "../components/Modal";
import { DEFAULT_FILTERS, FilterMenu, Filters } from "../components/FilterMenu";
import { galleryImages } from "../configuration/galleryImages";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { Drawer, ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import { Button } from "../components/Button";
import { Overlay } from "../components/Overlay";
import { CustomTheme, Page } from "./App";

type RuleNames = "image";

interface GalleryProps {
  setCurrentPage: Dispatch<SetStateAction<Page>>;
}

interface GalleryStylesProps extends GalleryProps {
  isExtraSmallScreen: boolean;
}

const useStyles = createUseStyles<RuleNames, Partial<GalleryStylesProps>, CustomTheme>((theme) => ({
  image: { cursor: "pointer" },
}));

const universes = Array.from(new Set(galleryImages.map((image) => image.universe))).filter(Boolean);
const imageSizes = Array.from(
  new Set(galleryImages.map((image) => image.imageSize).filter(Boolean))
);
const finishes = Array.from(new Set(galleryImages.map((image) => image.finish).filter(Boolean)));

export const Gallery = (props: GalleryProps) => {
  const { setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();

  const isExtraSmallScreen = useMediaQuery("only screen and (max-width:600px)");
  const isSmallScreen = useMediaQuery("only screen and (min-width:600px)");
  const isMediumScreen = useMediaQuery("only screen and (min-width:768px)");
  const isLargeScreen = useMediaQuery("only screen and (min-width:992px)");
  const isExtraLargeScreen = useMediaQuery("only screen and (min-width:1200px)");

  const classes = useStyles({ isExtraSmallScreen, theme });

  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const numFiltersSelected = useMemo(
    () =>
      filters.universes.length +
      filters.finishes.length +
      filters.imageSizes.length +
      (filters.isCommission ? 1 : 0),
    [filters]
  );

  const calculateCols = () => {
    let cols = 0;
    if (isExtraLargeScreen) return 5;
    if (isLargeScreen) return 4;
    if (isMediumScreen) return 3;
    if (isSmallScreen) return 2;
    if (isExtraSmallScreen) return 1;
    return cols;
  };

  useEffect(() => {
    setCurrentPage("gallery");
  }, [setCurrentPage]);

  useEffect(() => {
    setFilteredImages(
      galleryImages.filter((image) => {
        let isIncluded = true;

        if (filters.universes.length && !filters.universes.includes(image.universe)) {
          isIncluded = false;
        }

        if (filters.imageSizes.length && !filters.imageSizes.includes(image.imageSize)) {
          isIncluded = false;
        }

        if (filters.finishes.length && !filters.finishes.includes(image.finish)) {
          isIncluded = false;
        }

        if (filters.isCommission && !image.isCommission) {
          isIncluded = false;
        }

        return isIncluded;
      })
    );
  }, [filters]);

  const openModal = (id: number) => {
    setCurrentImage(id);
    setOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setOpen(false);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <>
      <Button
        alignSelf="flex-start"
        margin="0 0 8px 0"
        label={`Filter ${numFiltersSelected > 0 ? `(${numFiltersSelected})` : ""}`}
        click={toggleDrawer(true)}
      ></Button>
      {filteredImages.length > 0 ? (
        <ImageList
          variant="masonry"
          sx={{ width: "100%", height: "100%", marginTop: 0 }}
          cols={calculateCols()}
          gap={8}
        >
          {filteredImages.map((item, index) => (
            <ImageListItem
              className={classes.image}
              key={item.url}
              onMouseDown={() => openModal(index)}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.url}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="eager"
              />
              <Overlay title={item.title} open={hoveredImage === index} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <h3 style={{ width: "100%" }}>The selected filters returned no results.</h3>
      )}
      <Modal open={open} closeModal={closeModal}>
        <GalleryViewer
          currentImageId={currentImage}
          currentImage={filteredImages[currentImage as number]}
          numImages={filteredImages.length - 1}
          incrementImage={(e: SyntheticEvent) => {
            e.preventDefault();
            setCurrentImage((prevImage) =>
              Math.min((prevImage as number) + 1, filteredImages.length - 1)
            );
          }}
          decrementImage={(e: SyntheticEvent) => {
            e.preventDefault();
            setCurrentImage((prevImage) => Math.max((prevImage as number) - 1, 0));
          }}
          closeModal={closeModal}
        />
      </Modal>
      <ScrollToTopButton />
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)} keepMounted>
        <FilterMenu
          universes={universes}
          imageSizes={imageSizes}
          finishes={finishes}
          setFilters={setFilters}
        ></FilterMenu>
      </Drawer>
    </>
  );
};
