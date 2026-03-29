import { createUseStyles, useTheme } from "react-jss";
import { GalleryViewer } from "../components/GalleryViewer";
import { FilterMenu } from "../components/FilterMenu";
import { galleryImages } from "../configuration/galleryImages";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { Button, Drawer, ImageList, ImageListItem, useMediaQuery, Modal } from "@mui/material";
import { Overlay } from "../components/Overlay";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CustomTheme, PageTitle } from "./App";

type RuleNames = "container" | "image";

interface GalleryProps {
  setCurrentPage: Dispatch<SetStateAction<PageTitle>>;
}

export interface Filter {
  universes: string[];
  imageSizes: string[];
  finishes: string[];
  isCommission: boolean;
}

const useStyles = createUseStyles<
  RuleNames,
  GalleryProps & { isExtraSmallScreen: boolean },
  CustomTheme
>((theme) => ({
  container: (props) => ({
    display: "grid",
    gridTemplateColumns: props.isExtraSmallScreen ? "1fr" : "1fr 5fr",
    gap: "12px",
    width: "100%",
  }),
  image: { cursor: "pointer", "& img": { borderRadius: "12px" } },
}));

const universes = Array.from(new Set(galleryImages.map((image) => image.universe))).filter(Boolean);
const imageSizes = Array.from(
  new Set(galleryImages.map((image) => image.imageSize).filter(Boolean)),
);
const finishes = Array.from(new Set(galleryImages.map((image) => image.finish).filter(Boolean)));

export const Gallery = (props: GalleryProps) => {
  const isExtraSmallScreen = useMediaQuery("only screen and (max-width:600px)");
  const isSmallScreen = useMediaQuery("only screen and (min-width:600px)");
  const isMediumScreen = useMediaQuery("only screen and (min-width:768px)");
  const isLargeScreen = useMediaQuery("only screen and (min-width:992px)");
  const isExtraLargeScreen = useMediaQuery("only screen and (min-width:1200px)");

  const { setCurrentPage } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<Filter>({
    universes: [],
    imageSizes: [],
    finishes: [],
    isCommission: false,
  });
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(0);

  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, isExtraSmallScreen, theme });

  const calculateCols = () => {
    let cols = 0;
    if (isExtraLargeScreen) return 6;
    if (isLargeScreen) return 5;
    if (isMediumScreen) return 4;
    if (isSmallScreen) return 3;
    if (isExtraSmallScreen) return 2;
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
      }),
    );
  }, [filters]);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const closeModal = () => {
    setCurrentImageIndex(0);
    setOpen(false);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  const incrementImage = () => {
    setCurrentImageIndex((prevIndex) => Math.min(prevIndex + 1, filteredImages.length - 1));
  };

  const decrementImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <>
      {isExtraSmallScreen && <Button onClick={toggleDrawer(true)}>Filter</Button>}
      <div className={classes.container}>
        {!isExtraSmallScreen && (
          <FilterMenu
            universes={universes}
            imageSizes={imageSizes}
            finishes={finishes}
            setFilters={setFilters}
          ></FilterMenu>
        )}
        {filteredImages.length > 0 ? (
          <ImageList
            variant="masonry"
            gap={12}
            sx={{ width: "100%", height: "100%", marginTop: 0 }}
            cols={calculateCols()}
          >
            {filteredImages.map((item, index) => (
              <ImageListItem
                className={classes.image}
                key={index}
                onMouseDown={() => openModal(index)}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={`${item.url}`} alt={item.title} loading="eager" />
                <Overlay title={item.title} open={hoveredImage === index} />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <h3 style={{ width: "100%" }}>The selected filters returned no results.</h3>
        )}
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        slotProps={{ backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" } } }}
      >
        <>
          <GalleryViewer
            currentImageId={currentImageIndex}
            currentImage={filteredImages[currentImageIndex]}
            numImages={filteredImages.length - 1}
            incrementImage={incrementImage}
            decrementImage={decrementImage}
            closeModal={closeModal}
          />
        </>
      </Modal>
      <ScrollToTopButton />
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)} keepMounted>
        <FilterMenu
          margin="8px"
          universes={universes}
          imageSizes={imageSizes}
          finishes={finishes}
          setFilters={setFilters}
        ></FilterMenu>
      </Drawer>
    </>
  );
};
