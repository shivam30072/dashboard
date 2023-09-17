const { Avatar } = require("@mui/material");

const Avatars = () => {
  return (
    <>
      <Avatar
        sx={{ width: 24, height: 24, fontSize: 12 }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <Avatar
        sx={{ width: 24, height: 24, fontSize: 12 }}
        alt="Travis Howard"
        src="/static/images/avatar/2.jpg"
      />
      <Avatar
        sx={{ width: 24, height: 24, fontSize: 12 }}
        alt="Agnes Walker"
        src="/static/images/avatar/4.jpg"
      />
      <Avatar
        sx={{ width: 24, height: 24, fontSize: 12 }}
        alt="Trevor Henderson"
        src="/static/images/avatar/5.jpg"
      />
      <Avatar
        sx={{ width: 24, height: 24, bgcolor: "orange", fontSize: 12 }}
        alt="Trevor Henderson"
        src="/static/images/avatar/5.jpg"
      >
        +2
      </Avatar>
    </>
  );
};

export default Avatars;
