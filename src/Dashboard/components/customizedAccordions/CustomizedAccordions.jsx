import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Chip, MenuItem, Paper, Select } from "@mui/material";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
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
}));

export default function CustomizedAccordions({ time, data , title , chipData , setChipData }) {
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  const handleDelete = (chipToDelete, dayIndex) => () => {
    setChipData((prevChipData) => {
      const updatedDays = [...prevChipData];
  
      updatedDays[dayIndex] = updatedDays[dayIndex].filter(
        (chip) => chip.key !== chipToDelete.key
      );
  
      return updatedDays;
    });
  };
  
  
  const handleSelectChange = (dayIndex, event) => {
    const selectedTitle = event.target.value;
    const selectedItem = data?.find((item) => item.title === selectedTitle);
  
    if (selectedItem) {
      setChipData((prevChipData) => {
        // نسخ البيانات القديمة
        const updatedChipData = [...prevChipData];
  
        // التأكد أن اليوم عبارة عن مصفوفة
        if (!Array.isArray(updatedChipData[dayIndex])) {
          updatedChipData[dayIndex] = [];
        }
  
        // التحقق إذا التمرين موجود بالفعل في اليوم نفسه
        const exists = updatedChipData[dayIndex].some(
          (chip) => chip.key === selectedItem.id
        );
  
        if (!exists) {
          updatedChipData[dayIndex] = [
            ...updatedChipData[dayIndex],
            { key: selectedItem.id, label: selectedItem.title },
          ];
        }
  
        return updatedChipData;
      });
    }
  };
  
  
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ gridColumn: "span 4" }}>
      {Array.from({ length: time }).map((_, index) => (
        <Accordion
          key={index}
          sx={{ gridColumn: "span 4" }}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
          >
            <Typography
              sx={{
                width: "100%",
              }}
              component="span"
            >
              <div style={{ fontSize: "1.3rem" }}>
                week #{Math.floor(index / 7) + 1} day #{(index % 7) + 1}
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <h2 style={{ margin: "0 0 2rem 0" }}>
                select {title} for this date
              </h2>
              <Select
                name="Type"
                value=""
                onChange={(event) => handleSelectChange(index, event)}
                displayEmpty
                sx={{ width: "25%", fontSize: "1.3rem", padding: "0" }}
                MenuProps={MenuProps}
                renderValue={(selected) => {
                  if (!selected) {
                    return <em style={{ color: "#aaa" }}>{title}</em>;
                  }
                  return selected;
                }}
              >
                <MenuItem disabled value="">
                  <em>{title}</em>
                </MenuItem>
                {data?.map((e) => (
                  <MenuItem
                    key={e?.id}
                    value={e?.title}
                    sx={{
                      fontSize: "1.2rem",
                      fontFamily: "system-ui",
                      lineHeight: "1.5",
                    }}
                  >
                    {e?.title}
                  </MenuItem>
                ))}
              </Select>
              <hr
                style={{ width: "100%", margin: "1rem 0", background: "#aaa" }}
              />
              {chipData[index]?.length > 0 && (
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    background: "transparent",
                    boxShadow: "0 0 0",
                    listStyle: "none",
                    gridColumn: "span 4",
                    p: 0.5,
                    m: 0,
                  }}
                  component="ul"
                >
                  {chipData[index]?.map((data) => {
                    return (
                      <ListItem key={data.key}>
                        <Chip
                          sx={{
                            fontSize: "1.2rem",
                            fontFamily: "system-ui",
                            lineHeight: "1.5",
                          }}
                          label={data.label}
                          onDelete={handleDelete(data , index)}
                        />
                      </ListItem>
                    );
                  })}
                </Paper>
              )}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
