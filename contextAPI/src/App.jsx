// import React from 'react'
// import AirtelProvider from './context/AirtelContext'
// import San from './components/San'
// import Lina from './components/Lina'

// const App = () => {
//   return (

 // !  now we are using the provider .
 //! what ever value is present in provider that can be accessed by these children (San, Lina)
//     <AirtelProvider>
//           <San/>
//           <hr />
//           <Lina/>      
//     </AirtelProvider>
//   )
// }

// export default App



//!  theme change 

import React from 'react'
import ThemeProvider from './context/ThemeContext'
import Container from './components/Container'

const App = () => {


  return (
    <ThemeProvider>
      <Container/>
    </ThemeProvider>
  )
}

export default App
