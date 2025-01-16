import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function GoalDetailsSkeleton() {
  return (
    <div style={{display: 'flex' , alignItems: 'center' , justifyContent: 'center' , height: '100vh'}}>
      <Stack
      spacing={1}
      style={{width:'50%' , marginTop: '5rem' , display:'flex' , alignItems:'center'}}
    >
      <Skeleton variant="rounded" sx={{borderRadius: '50%' , margin: 'auto'}} width={400} height={400} />
    </Stack>
     <Stack
     spacing={1}
     style={{flex: '1'}}
   >
     <Skeleton variant="text" width={500} sx={{ fontSize: "1rem" }} />
     <Skeleton variant="text" width={500} sx={{ fontSize: "1rem" }} />
     <Skeleton variant="text" width={500} sx={{ fontSize: "1rem" }} />
   </Stack>
    </div>
  );
}
