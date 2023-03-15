import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CreateIcon from '@mui/icons-material/Create';
 const menuData = [
    {
        id:1,
        menu : "Profil",
        picture : <PermIdentityIcon />,
        
    },
    {
        id : 2,
        menu : "Nouvel article",
        picture : <CreateIcon />

    },
    {
        id : 3,
        menu : "Se déconnecter",
        picture : null,

    },
]
export {menuData};