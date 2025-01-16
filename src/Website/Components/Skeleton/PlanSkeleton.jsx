import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function PlanSkeleton() {
  const numberRender = Array(3)
    .fill(0)
    .map((_, index) => {
      return (
        <Stack key={index} spacing={1}>
          <Skeleton variant="rounded" width={276} height={571} />
        </Stack>
      );
    });
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' , width: '100%' , flexWrap: "nowrap" }}>
      {numberRender}
    </div>
  );
}
