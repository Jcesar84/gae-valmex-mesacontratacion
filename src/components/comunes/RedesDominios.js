import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import Apple from '../../assets/icons/redesDominios/apple.png';
import Ebay from '../../assets/icons/redesDominios/ebay.png';
import Facebook from '../../assets/icons/redesDominios/facebook.png';
import Flickr  from '../../assets/icons/redesDominios/flickr.png';
import Foursquare from '../../assets/icons/redesDominios/foursquare.png';
import GitHub from '../../assets/icons/redesDominios/github.png';
import Google from '../../assets/icons/redesDominios/google.png';
import Gravatar from '../../assets/icons/redesDominios/gravatar.png';
import Instagram from '../../assets/icons/redesDominios/instagram.png';
import Lastfm from '../../assets/icons/redesDominios/lastfm.png';
import Linkedin from '../../assets/icons/redesDominios/linkedin.png';
import Microsoft from '../../assets/icons/redesDominios/microsoft.png';
import Myspace from '../../assets/icons/redesDominios/myspace.png';
import Pinterest from '../../assets/icons/redesDominios/pinterest.png';
import Skype from '../../assets/icons/redesDominios/skype.png';
import Spotify from '../../assets/icons/redesDominios/spotify.png';
import Telegram from '../../assets/icons/redesDominios/telegrama.png';
import Tumblr from '../../assets/icons/redesDominios/tumblr.png';
import Twitter from '../../assets/icons/redesDominios/twitter.png';
import Viber from '../../assets/icons/redesDominios/viber.png';
import Vimeo from '../../assets/icons/redesDominios/vimeo.png';
import Weibo from '../../assets/icons/redesDominios/weibo.png';
import Whatsapp from '../../assets/icons/redesDominios/whatsapp.png';
import Yahoo from '../../assets/icons/redesDominios/yahoo.png';

const RedesDominios = (props) => {

    // eslint-disable-next-line
    const [redDominio, setRedDominio] = React.useState(props.redDominio);

    if (redDominio === 'apple') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Apple} alt={"Apple"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialApple"
                name="redSocialApple"
                fullWidth
                label="Apple"
                value={"Apple"}
            />
        )
    }
    if (redDominio === 'ebay') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Ebay} alt={"Ebay"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialEbay"
                name="redSocialEbay"
                fullWidth
                label="Ebay"
                value={"Ebay"}
            />
        )
    }
    if (redDominio === 'facebook') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Facebook} alt={"Facebook"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialFacebook"
                name="redSocialFacebook"
                fullWidth
                label="Facebook"
                value={"Facebook"}
            />
        )
    }   
    if (redDominio === 'flickr') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Flickr} alt={"Flickr"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialFlickr"
                name="redSocialFlickr"
                fullWidth
                label="Flickr"
                value={"Flickr"}
            />
        )
    }
    if (redDominio === 'foursquare') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Foursquare} alt={"Foursquare"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialFoursquare"
                name="redSocialFoursquare"
                fullWidth
                label="Foursquare"
                value={"Foursquare"}
            />
        )
    }
    if (redDominio === 'github') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={GitHub} alt={"GitHub"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialGitHub"
                name="redSocialGitHub"
                fullWidth
                label="GitHub"
                value={"GitHub"}
            />
        )
    }
    if (redDominio === 'google') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Google} alt={"Google"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialGoogle"
                name="redSocialGoogle"
                fullWidth
                label="Google"
                value={"Google"}
            />
        )
    }
    if (redDominio === 'gravatar') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Gravatar} alt={"Gravatar"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialGravatar"
                name="redSocialGravatar"
                fullWidth
                label="Gravatar"
                value={"Gravatar"}
            />
        )
    }
    if (redDominio === 'instagram') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Instagram} alt={"Instagram"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialInstagram"
                name="redSocialInstagram"
                fullWidth
                label="Instagram"
                value={"Instagram"}
            />
        )
    }
    if (redDominio === 'lastfm') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Lastfm} alt={"Lastfm"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialLastfm"
                name="redSocialLastfm"
                fullWidth
                label="Lastfm"
                value={"Lastfm"}
            />
        )
    }
    if (redDominio === 'linkedin') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Linkedin} alt={"Linkedin"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialLinkedin"
                name="redSocialLinkedin"
                fullWidth
                label="Linkedin"
                value={"Linkedin"}
            />
        )
    }
    if (redDominio === 'microsoft') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Microsoft} alt={"Microsoft"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialMicrosoft"
                name="redSocialMicrosoft"
                fullWidth
                label="Microsoft"
                value={"Microsoft"}
            />
        )
    }
    if (redDominio === 'myspace') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Myspace} alt={"Myspace"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialMyspace"
                name="redSocialMyspace"
                fullWidth
                label="Myspace"
                value={"Myspace"}
            />
        )
    }
    if (redDominio === 'pinterest') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Pinterest} alt={"Pinterest"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialPinterest"
                name="redSocialPinterest"
                fullWidth
                label="Pinterest"
                value={"Pinterest"}
            />
        )
    }
    if (redDominio === 'skype') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Skype} alt={"Skype"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialSkype"
                name="redSocialSkype"
                fullWidth
                label="Skype"
                value={"Skype"}
            />
        )
    }
    if (redDominio === 'spotify') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Spotify} alt={"Spotify"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialSpotify"
                name="redSocialSpotify"
                fullWidth
                label="Spotify"
                value={"Spotify"}
            />
        )
    }
    if (redDominio === 'telegram') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Telegram} alt={"Telegram"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialTelegram"
                name="redSocialTelegram"
                fullWidth
                label="Telegram"
                value={"Telegram"}
            />
        )
    }
    if (redDominio === 'tumblr') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Tumblr} alt={"Tumblr"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialTumblr"
                name="redSocialTumblr"
                fullWidth
                label="Tumblr"
                value={"Tumblr"}
            />
        )
    }
    if (redDominio === 'twitter') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Twitter} alt={"Twitter"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialTwitter"
                name="redSocialTwitter"
                fullWidth
                label="Twitter"
                value={"Twitter"}
            />
        )
    }
    if (redDominio === 'viber') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Viber} alt={"Viber"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialViber"
                name="redSocialViber"
                fullWidth
                label="Viber"
                value={"Viber"}
            />
        )
    }
    if (redDominio === 'vimeo') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Vimeo} alt={"Vimeo"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialVimeo"
                name="redSocialVimeo"
                fullWidth
                label="Vimeo"
                value={"Vimeo"}
            />
        )
    }
    if (redDominio === 'weibo') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Weibo} alt={"Weibo"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialWeibo"
                name="redSocialWeibo"
                fullWidth
                label="Weibo"
                value={"Weibo"}
            />
        )
    }
    if (redDominio === 'whatsapp') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Whatsapp} alt={"Whatsapp"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialWhatsapp"
                name="redSocialWhatsapp"
                fullWidth
                label="Whatsapp"
                value={"Whatsapp"}
            />
        )
    }
    if (redDominio === 'yahoo') {
        return (
            <TextField
                InputProps={{
                    color: 'primary',
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <img src={Yahoo} alt={"Yahoo"} />
                        </InputAdornment>
                    ),
                }}
                id="redSocialYahoo"
                name="redSocialYahoo"
                fullWidth
                label="Yahoo"
                value={"Yahoo"}
            />
        )
    }
}

export default RedesDominios;