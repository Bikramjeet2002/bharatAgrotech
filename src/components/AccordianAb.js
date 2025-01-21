import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  borderLeft: "3px solid grey  ",
  borderRadius: "2px",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">
            {" "}
            What makes Bharat Agro Tech blades unique?
         
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="text-gray-500">
          <Typography>
          The blades are manufactured using advanced technology and strict
            quality control. They are designed for tough soil conditions,
            ensuring effective plowing and cultivation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span"> Why choose Bharat Agro Tech</Typography>
        </AccordionSummary>
        <AccordionDetails className="text-gray-500">
          <Typography>
            For high-quality, durable products, innovative designs, competitive
            pricing, and a commitment to enhancing farmers' productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">
          What is the specialty of Bharat Agro Tech products?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="text-gray-500">
          <Typography>
    
            Bharat Agro Tech products are known for:
            <li>
              European-quality rotary tiller blades made of high-performance
              steel.
            </li>
            <li>
              Strict heat-treatment processes to ensure durability and strength.
            </li>
            <li>
              High-quality cultivator shovels designed to meet international
              standards.
            </li>
            <li>
              Products suitable for all types of soil and cultivation needs.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
