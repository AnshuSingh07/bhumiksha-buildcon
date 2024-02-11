import { Paper } from "@mui/material";

const GoogleLocationMap = () => {
  return (
    <>
      <Paper
        elevation={7}
        sx={{ width: "100%", height: { xs: "300px", md: "230px" } }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8275607870537!2d86.41044697511754!3d23.824730178619788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a4b1f312febf%3A0xf463406d361f656e!2sGGCET%20St%20Xavier&#39;s%20International%20School!5e0!3m2!1sen!2sin!4v1707658817352!5m2!1sen!2sin"
          loading="lazy"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </Paper>
    </>
  );
};

export default GoogleLocationMap;
