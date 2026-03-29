import { useState, forwardRef, useCallback, TouchEventHandler, MouseEventHandler } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos, Close } from "@mui/icons-material";
import { GalleryImage } from "../configuration/galleryImages";
import { CustomTheme } from "../application/App";

type RuleNames = "imgContainer" | "img" | "arrow" | "cross";

interface GalleryViewerProps {
  closeModal: () => void;
  incrementImage: () => void;
  decrementImage: () => void;
  numImages: number;
  currentImageId: number;
  currentImage: GalleryImage;
}

const useStyles = createUseStyles<RuleNames, GalleryViewerProps, CustomTheme>((theme) => ({
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  img: {
    height: "auto",
    borderRadius: "12px",
  },
  arrow: {
    position: "absolute",
    userSelect: "none",
    opacity: 0.25,
    transition: "opacity 0.2s",
  },
  cross: {
    position: "absolute",
    userSelect: "none",
    opacity: 0.5,
    transition: "opacity 0.2s",
    right: 0,
    top: 0,
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
    },
  },
}));

export const GalleryViewer = forwardRef<HTMLDivElement, GalleryViewerProps>((props, ref) => {
  const isExtraSmallScreen = useMediaQuery("only screen and (max-width:600px)");
  const isSmallScreen = useMediaQuery("only screen and (min-width:600px)");
  const isMediumScreen = useMediaQuery("only screen and (min-width:768px)");
  const isLargeScreen = useMediaQuery("only screen and (min-width:992px)");
  const isExtraLargeScreen = useMediaQuery("only screen and (min-width:1200px)");
  const isMassiveScreen = useMediaQuery("only screen and (min-width:1600px)");

  const { closeModal, currentImage, currentImageId, decrementImage, incrementImage, numImages } =
    props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const MIN_SWIPE_DISTANCE = 50;

  const calculateImageWidth = () => {
    let width = "100vw";
    if (isMassiveScreen) return "30vw";
    if (isExtraLargeScreen) return "50vw";
    if (isLargeScreen) return "60vw";
    if (isMediumScreen) return "70vw";
    if (isSmallScreen) return "80vw";
    if (isExtraSmallScreen) return "90vw";
    return width;
  };

  const close = useCallback(() => {
    closeModal();
    setLeftActive(false);
    setRightActive(false);
  }, [closeModal, setLeftActive, setRightActive]);

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove: TouchEventHandler<HTMLDivElement> = (e) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      incrementImage();
    }

    if (isRightSwipe) {
      decrementImage();
    }
  };

  useEffect(() => {
    if (currentImageId === 0) {
      setLeftActive(false);
    }

    if (currentImageId === numImages) {
      setRightActive(false);
    }
  }, [currentImageId, numImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        decrementImage();
      } else if (e.key === "ArrowRight") {
        incrementImage();
      } else if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [decrementImage, incrementImage, close]);

  const onBackdropClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if ((e.target as HTMLElement).id === "container") {
      close();
    }
  };

  const src = currentImage ? currentImage.url : "";
  const alt = currentImage ? currentImage.title : "";

  return (
    <div
      id="container"
      className={classes.imgContainer}
      ref={ref}
      onClick={onBackdropClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      <img
        className={classes.img}
        src={src}
        alt={alt}
        style={{ maxWidth: calculateImageWidth() }}
      />
      <ArrowBackIos
        className={classes.arrow}
        style={{
          left: 10,
          opacity: leftActive ? 1 : 0.25,
          cursor: leftActive ? "pointer" : "default",
        }}
        sx={{ fontSize: 50, color: theme.colorSecondary }}
        onClick={decrementImage}
        onMouseEnter={currentImageId > 0 ? () => setLeftActive(!leftActive) : undefined}
        onMouseLeave={currentImageId > 0 ? () => setLeftActive(!leftActive) : undefined}
      />
      <ArrowForwardIos
        className={classes.arrow}
        style={{
          right: 10,
          opacity: rightActive ? 1 : 0.25,
          cursor: rightActive ? "pointer" : "default",
        }}
        sx={{ fontSize: 50, color: theme.colorSecondary }}
        onClick={incrementImage}
        onMouseEnter={currentImageId < numImages ? () => setRightActive(!rightActive) : undefined}
        onMouseLeave={currentImageId < numImages ? () => setRightActive(!rightActive) : undefined}
      />
      <Close
        className={classes.cross}
        sx={{ fontSize: 50, color: theme.colorSecondary }}
        onClick={close}
      />
    </div>
  );
});
