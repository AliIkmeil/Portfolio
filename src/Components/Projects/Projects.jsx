import React from "react";
import "./Projects.css";
import WashMyRide from "./WashMyRide imoji.png";
import KhalekBdarak from "./Supermarket-E-Logo.webp";
import { Outlet, useNavigate } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projectsDiv">
      <div className="projectsImgs">
        <Card
          sx={{ width: 300, height: 220, maxWidth: "100%", boxShadow: "lg" }}
        >
          <CardOverflow>
            <AspectRatio sx={{ height: 120 }}>
              <img
                src={WashMyRide}
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Wash My Ride</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
            >
              Team-Work project the main idea is to deliver car services to
              clients!
            </Link>
          </CardContent>
          <CardOverflow>
            <Button
              onClick={() => {
                navigate("");
              }}
              variant="solid"
              color="danger"
              size="lg"
            >
              Show Description
            </Button>
          </CardOverflow>
        </Card>
        <Card sx={{ width: 300, maxWidth: "100%", boxShadow: "lg" }}>
          <CardOverflow>
            <AspectRatio sx={{minWidth: 20,height:170 }}>
              <img
                src={KhalekBdarak}
                srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="body-xs">Khalek Bdarak SuperMarket</Typography>
            <Link
              href="#product-card"
              fontWeight="md"
              color="neutral"
              textColor="text.primary"
              overlay
            >
              An E-Commerce Website that provides a SuperMarket products!
            </Link>
          </CardContent>
          <CardOverflow>
            <Button
              onClick={() => {
                navigate("khalekbdarak");
              }}
              variant="solid"
              color="danger"
              size="lg"
            >
              Show Description
            </Button>
          </CardOverflow>
        </Card>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
