import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function HeaderChatSkeleton() {
  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}>
      <Stack
        spacing={1}
        style={{
          marginRight: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "50%" }}
          width={50}
          height={50}
        />
      </Stack>
      <Stack spacing={1} style={{ flex: "1" }}>
        <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" width={150} sx={{ fontSize: "1rem" }} />
      </Stack>
    </div>
  );
}
