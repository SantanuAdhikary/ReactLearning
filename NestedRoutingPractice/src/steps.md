created Root.jsx there sidebar in left and content in right. 
left dashborad will be static and right side content will be dynamic
add that component to app.jsx 
create users folder 
inside that Allusers.jsx and Profile.jsx 
create pages and inside that Home and Notfound
now we have to create route configaration 
in pages create sidenavbar folder , inside that SideContainer.jsx, Menu.jsx
Menu.jsx --> NavbarContainer.jsx --> Root.jsx (sidebar)

now for right side we need dashboard 
in users folder Dashboard.jsx
Dashboard.jsx --> Root.jdx (content)
now if we touch on home ,users , content the perticular data should come . for that we need nested routing  

in App.jsx we will create router 
here for path : "/" route to Dashboard.jsx . for this remove the Dashboard component from Root and add <Outlet/> in the content. 

now I took data from api.getusers then wll the data I maped in AllUsers.jsx
AllUsers.jsx --> Dashboard.jsx 
now I created nested routing 

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
        children: [
          {
            path:"/all-users",
            element: <AllUsers/>          //! nested routing
          }
        ]
      },
      
    ]
  }
  
])

now we have products . 
take api data and store in product.json file 
create Product.jsx inside components--> products and display all the product. 
create nested route in App.jsx for '/product' 


now what will be the problem default it won't come any data . 
if i touch on users and products then teh perticular data is coming . 
for that which one I wan default i have to do  
    <!--! index : true  -->  

and now the path : all-users should not use . instead of that use only '/'
from dashboard and menu remove that. 