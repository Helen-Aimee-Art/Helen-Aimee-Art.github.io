import { JSX, useContext } from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { createUseStyles, useTheme } from "react-jss";
import { CommissionImage } from "../configuration/commissionImages";
import { CustomTheme, IsDesktopContext, WithIsDesktop } from "../application/App";

type RuleNames = "container" | "details" | "carousel" | "slide" | "imageContainer" | "image";

interface CommissionCardProps {
  details: JSX.Element;
  images: CommissionImage[];
}

const useStyle = createUseStyles<RuleNames, WithIsDesktop<CommissionCardProps>, CustomTheme>(
  (theme) => ({
    container: (props) => ({
      display: "flex",
      flexDirection: props.isDesktop ? "row" : "column",
    }),
    details: {
      flex: 1,
    },
    carousel: {
      width: "100%",
      flex: 2,
    },
    slide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    imageContainer: {
      margin: "0 12px",
      width: "100%",
      height: "100%",
    },
    image: {
      width: "100%",
      height: "100%",
      maxWidth: 250,
      userDrag: "none",
      objectFit: "cover",
      borderRadius: "12px",
    },
  }),
);

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2200, min: 1224 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1224, min: 664 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1,
  },
};

export const CommissionCard = (props: CommissionCardProps) => {
  const { details, images } = props;
  const isDesktop = useContext(IsDesktopContext);
  const theme = useTheme<CustomTheme>();
  const classes = useStyle({ ...props, isDesktop, theme });

  const carousel = (
    <Carousel
      responsive={responsive}
      infinite={true}
      draggable={true}
      itemClass={classes.slide}
      containerClass={classes.carousel}
    >
      {images.map((image, index) => (
        <div className={classes.imageContainer} key={index}>
          <img className={classes.image} src={image.url} alt="" />
        </div>
      ))}
    </Carousel>
  );

  return (
    <div className={classes.container}>
      {details ? <div className={classes.details}>{details}</div> : null}
      {images.length > 0 && carousel}
    </div>
  );
};
