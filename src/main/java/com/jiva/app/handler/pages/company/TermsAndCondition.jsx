import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  minHeight: "100vh",
}));

export default function TermsAndCondition() {
  return (
    <Wrapper>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8}>
          <Paper
            sx={{
              padding: 3,
              mt: 4,
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold" }}
                gutterBottom
              >
                Terms & Conditions
              </Typography>
              <Typography variant="body1" gutterBottom>
                Please read through and accept the terms & conditions
              </Typography>
            </div>
            <div
              style={{
                padding: 16,
                border: "2px solid #ccc",
                borderRadius: "3px",
                overflowY: "scroll",
              }}
            >
              <Typography
                variant="subtitle1"
                style={{ fontWeight: "bold" }}
                gutterBottom
              >
                1. Your agreement
              </Typography>
              <Typography variant="body1" gutterBottom>
                By using this Site, you agree to be bound by, and to comply
                with, these Terms and Conditions. If you do not agree to these
                Terms and Conditions, please do not use this site. PLEASE NOTE:
                We reserve the right, at our sole discretion, to change, modify
                or otherwise alter these Terms and Conditions at any time.
                Unless otherwise indicated, amendments will become effective
                immediately. Please review these Terms and Conditions
                periodically. Your continued use of the Site following the
                posting of changes and/or modifications will constitute your
                acceptance of the revised Terms and Conditions and the
                reasonableness of these standards for notice of changes.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mt: 3 }}
                gutterBottom
              >
                2. Privacy
              </Typography>
              <Typography variant="body1" gutterBottom>
                Please review our Privacy Policy, which also governs your visit
                to this Site, to understand our practices. By using this Site,
                you agree to be bound by, and to comply with, these Terms and
                Conditions. If you do not agree to these Terms and Conditions,
                please do not use this site. PLEASE NOTE: We reserve the right,
                at our sole discretion, to change, modify or otherwise alter
                these Terms and Conditions at any time. Unless otherwise
                indicated, amendments will become effective immediately. Please
                review these Terms and Conditions periodically. Your continued
                use of the Site following the posting of changes and/or
                modifications will constitute your acceptance of the revised
                Terms and Conditions and the reasonableness of these standards
                for notice of changes. For your information, this page was last
                updated as of the date at the top of these terms and conditions.
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
