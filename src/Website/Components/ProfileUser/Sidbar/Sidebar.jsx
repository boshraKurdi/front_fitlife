import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <p className="p_profile">boshra kurdi</p>
      <ul>
        <li className='sp'><CheckCircleIcon />width: 50 kg</li>
        <li className='sp'><CheckCircleIcon/>height: 156 cm</li>
        <li className='sp'><CheckCircleIcon/>illness: not found</li>
        <li className='sp'><CheckCircleIcon/>gender : feminine</li>
        <li className='sp'><CheckCircleIcon/>address : syria , aleppo</li>
        <li className='sp'><CheckCircleIcon/>email : thboshra@gmail.com</li>
      </ul>
    </div>
  );
}
