import React, {useState, useEffect} from 'react'
import CountryList from '../components/CountryList/CountryList'
import Header from '../components/Header/Header'
import { getList } from '../services/list';


const Home = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList()
          .then(items => {
            if(mounted) {
              setList(items)
            }
          })
        return () => mounted = false;
      }, [])

  return (
    <div><Header /><CountryList list={list} />
     </div>
  )
}

export default Home