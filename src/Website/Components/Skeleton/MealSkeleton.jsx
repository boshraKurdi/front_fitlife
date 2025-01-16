import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function MealSkeleton() {
  return (
    <>
    <Stack
    spacing={1}
    style={{marginTop: '6rem'}}
  >
    <Skeleton variant="rounded" width={200} height={10} />
  </Stack>
    <div style={{display: 'flex' , alignItems: 'center'}}>
      <Stack
      spacing={1}
      style={{width:'50%' , marginTop: '3rem' , display:'flex' , alignItems:'center'}}
    >
      <Skeleton variant="rounded" sx={{margin: 'auto' , borderRadius:'8px'}} width={300} height={130} />
    </Stack>
    <Stack
      spacing={1}
      style={{width:'50%' , marginTop: '3rem' , display:'flex' , alignItems:'center'}}
    >
      <Skeleton variant="rounded" sx={{margin: 'auto' , borderRadius:'8px'}} width={300} height={130} />
    </Stack>
    <Stack
      spacing={1}
      style={{width:'50%' , marginTop: '3rem' , display:'flex' , alignItems:'center'}}
    >
      <Skeleton variant="rounded" sx={{margin: 'auto' , borderRadius:'8px'}} width={300} height={130} />
    </Stack>
    <Stack
      spacing={1}
      style={{width:'50%' , marginTop: '3rem' , display:'flex' , alignItems:'center'}}
    >
      <Skeleton variant="rounded" sx={{margin: 'auto' , borderRadius:'8px'}} width={300} height={130} />
    </Stack>
    
    </div>
    </>
  );
}
