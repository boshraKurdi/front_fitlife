import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function ProfileSkeleton() {
  return (
    <>
      <div style={{margin: "6rem 0", display: "flex", alignItems: "center" , justifyContent:'space-between' }}>
        <Stack spacing={1} >
          <Skeleton variant="rounded" width={200} height={10} />
        </Stack>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Stack
            spacing={1}
            style={{
              width: "200px",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{ margin: "auto", borderRadius: "8px" }}
              width={160}
              height={50}
            />
          </Stack>
          <Stack
            spacing={1}
            style={{
              width: "200px",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{ margin: "auto", borderRadius: "8px" }}
              width={160}
              height={50}
            />
          </Stack>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" , justifyContent:'space-between' }}>
        <Stack
          spacing={1}
          style={{
            width: "440px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{ margin: "auto", borderRadius: "8px" }}
            width={350}
            height={100}
          />
        </Stack>
        <Stack
          spacing={1}
          style={{
            width: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{ margin: "auto", borderRadius: "8px" }}
            width={350}
            height={100}
          />
        </Stack>
        <Stack
          spacing={1}
          style={{
            width: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{ margin: "auto", borderRadius: "8px" }}
            width={350}
            height={100}
          />
        </Stack>
      </div>
    </>
  );
}
