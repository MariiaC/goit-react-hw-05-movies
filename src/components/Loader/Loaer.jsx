import { MdOutlineCameraswitch } from 'react-icons/md';
import s from './Loader.module.css';


function Loader() {
  return (
    <div className={s.loader__wrapper}>
      <MdOutlineCameraswitch className={s.loader} />
    </div>
  );
};

export default Loader;
//з минулої дз