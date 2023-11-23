import { Modal,Button,Box } from '@mui/material';
import React, {useState} from 'react'
import "./Profile.css"

const dummyProfileData = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john_doe',
      img: "",
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        zipCode: '12345',
      },
      phone: '555-1234',
      website: 'www.johndoe.com',
      company: {
        name: 'ABC Company',
        catchPhrase: 'Making things happen',
        bs: 'Best service in town',
      },
    },
    {
      id: 1,
      name: 'John Doe',
      username: 'john_doe',
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'Cityville',
        zipCode: '12345',
      },
      phone: '555-1234',
      website: 'www.johndoe.com',
      company: {
        name: 'ABC Company',
        catchPhrase: 'Making things happen',
        bs: 'Best service in town',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      address: {
        street: '456 Oak St',
        city: 'Townsville',
        zipCode: '67890',
      },
      phone: '555-5678',
      website: 'www.janesmith.com',
      company: {
        name: 'XYZ Corporation',
        catchPhrase: 'Innovation at its best',
        bs: 'Quality products',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      address: {
        street: '456 Oak St',
        city: 'Townsville',
        zipCode: '67890',
      },
      phone: '555-5678',
      website: 'www.janesmith.com',
      company: {
        name: 'XYZ Corporation',
        catchPhrase: 'Innovation at its best',
        bs: 'Quality products',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      address: {
        street: '456 Oak St',
        city: 'Townsville',
        zipCode: '67890',
      },
      phone: '555-5678',
      website: 'www.janesmith.com',
      company: {
        name: 'XYZ Corporation',
        catchPhrase: 'Innovation at its best',
        bs: 'Quality products',
      },
    },
    // Add more profiles as needed
  ];
const styleP = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // minHeight: "100vh",
    height: "auto",
    // marginTop:"20%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "80%",
    // height: "90vh",
    backgroundColor:'white',
    boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
    borderRadius:'10px',
    padding:'20px',
    backgroundClip: "border-box"
    // overflow:'scroll'
    
  };

function Profile1() {


    const [openP, setOpenP] = useState(false);
    const handleOpenP = () => setOpenP(true);
    const handleCloseP = () => setOpenP(false);
  


  return (


    <div>
     <Box >
      <Button
        id="basic-button"
        aria-controls={openP ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openP ? "true" : undefined}
        onClick={handleOpenP}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ textTransform: "capitalize", fontSize: "1rem", color: "brown" }}
      >
        Profile
      </Button>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={openP}
        onClose={handleCloseP}
      >
        <Box style={styleP}>
            <div className='profile-parent'>
                    <h1>Dummy Profile Data</h1>
                    {dummyProfileData.map(profile => (
                    <div key={profile.id}>
                    <h2>{profile.name}</h2>
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                    <p>Address: {`${profile.address.street}, ${profile.address.city} ${profile.address.zipCode}`}</p>
                    <p>Phone: {profile.phone}</p>
                    <p>Website: {profile.website}</p>
                    <p>Company: {profile.company.name}</p>
                    <p>Catch Phrase: {profile.company.catchPhrase}</p>
                    <p>BS: {profile.company.bs}</p>
                    {/* <hr /> */}
                    </div>
                ))}
                </div>
                </Box>
            </Modal>
        </Box>
    </div>
  )
}

export default Profile1