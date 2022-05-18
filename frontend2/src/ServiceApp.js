import React from 'react'
import Aging from './servicepages/Aging'
import Discriminaation from './servicepages/Discrimination'
import Childcare from './servicepages/Childcare'
import Volunteer from './servicepages/Volunteer'
import Support from './servicepages/Support'
import Disabilities from './servicepages/Disabilities'
import DomesticV from './servicepages/DomesticV'
import Education from './servicepages/Education'
import Employment from './servicepages/Employment'
import Health from './servicepages/Health'
import Homeless from './servicepages/Homeless'
import Housing from './servicepages/Housing'
import Immigration from './servicepages/Immigration'
import Legal from './servicepages/Legal'
import LGBTQ from './servicepages/LGBTQ'
import Victim from './servicepages/Victim'
import Youth from './servicepages/Youth'
import Veteran from './servicepages/Veteran'

const ServiceApp = () => {
    const URL = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json/";
  return (
     <div className="Service_App">
     <Routes>
         <Route exact path="/aging" element={<Aging URL={URL}/>}/>
         <Route path="/discrimination"  element= {<Discrimination URL={URL}/>}/>
         <Route path="/childcare"  element= {<Childcare URL={URL}/>}/>
         <Route path="/volunteer"  element= {<Volunteer URL={URL}/>}/>
         <Route path="/support"  element= {<Support URL={URL}/>}/>
         <Route path="/disabilities"  element= {<Disabilities URL={URL}/>}/>
         <Route path="/domesticviolence"  element= {<DomesticV URL={URL}/>}/>
         <Route path="/education"  element= {<Education URL={URL}/>}/>
         <Route path="/employment"  element= {<Employment URL={URL}/>}/>
         <Route path="/health"  element= {<Health URL={URL}/>}/>
         <Route path="/homeless"  element= {<Homeless URL={URL}/>}/>
         <Route path="/housing"  element= {<Housing URL={URL}/>}/>
         <Route path="/immigration"  element= {<Immigration URL={URL}/>}/>
         <Route path="/legal"  element= {<Legal URL={URL}/>}/>
         <Route path="/lgbtq"  element= {<LGBTQ URL={URL}/>}/>
         <Route path="/victim"  element= {<Victim URL={URL}/>}/>
         <Route path="/youth"  element= {<Youth URL={URL}/>}/>
         <Route path="/veteran"  element= {<Veteran URL={URL}/>}/>
         

     </Routes>
   
    
   </div>
  )
}

export default ServiceApp