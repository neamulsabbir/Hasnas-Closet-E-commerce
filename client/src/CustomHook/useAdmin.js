import React, { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true)
  console.log(isAdmin);

  useEffect(() => {
    if(email){
        fetch(`http://localhost:5000/userss/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsAdmin(data.isAdmin)
          setAdminLoading(false)
        });
    }
    else{
      setAdminLoading(false)
    }
  }, [email]);
  return [isAdmin,adminLoading];

};

export default useAdmin;
