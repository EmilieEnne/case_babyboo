import Mappe from '../Assets/folder-history 1.png'
import './Senesteordre.css'

type Props = {}

const Senesteordre = (props: Props) => {
  return (
    <div className='ordre-historie'>
       <img src={Mappe} alt="Mappe vector" />
        <h2>SENESTE ORDRER</h2>
        <span><a href="">Se alle</a></span>  
        <div className="seneste">
          <ul>
            <li className='white'>02-02-2022 <strong>#4134534 </strong> <a href=" ">Se ordre</a> <a href="">Genbestil</a></li>
            <li>02-02-2022 <strong>#4134534 </strong>  <a href=" ">Se ordre</a> <a href="">Genbestil</a></li>
            <li className='white'>02-02-2022 <strong>#4134534 </strong>  <a href=" ">Se ordre</a> <a href="">Genbestil</a></li>
            <li>02-02-2022 <strong>#4134534 </strong>  <a href=" ">Se ordre</a> <a href="">Genbestil</a></li>
            <li className='white'>02-02-2022 <strong>#4134534 </strong>  <a href=" ">Se ordre</a> <a href="">Genbestil</a></li>
            <li>02-02-2022 <strong>#4134534 </strong>  <a href=" ">Se ordre</a> <a href="">Genbestil</a></li>
            <li className='white'>02-02-2022 <strong>#4134534 </strong>  <a href=" ">Se ordre</a> <a href="">Genbestil</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Senesteordre