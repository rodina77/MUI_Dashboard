import { Box } from "@mui/material";
import CoverPage from "../coverPage";
import SignInForm from "../SignIn_form";

const SignInCover = () => {
  return (
    <>
      <Box>
        <CoverPage>
          <SignInForm />
        </CoverPage>
      </Box>
    </>
  );
};

export default SignInCover;
