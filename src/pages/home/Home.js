import React from "react";
import RequestsMap from "../../components/requests-map";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Search from '@material-ui/icons/Search';

export default function Home() {
    return (
        <div style={{ marginTop: '20px'}}>
            <Typography variant="h3" align="center">Hospitais Cadastrados</Typography>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <TextField
                    style={{  marginTop: '20px', height: '10vh', width: '40%' }}
                    size="small"
                    variant="outlined"
                    label="Procure por algum lugar..."
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <Search/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <RequestsMap/>
            </Grid>
        </div>
    );
}