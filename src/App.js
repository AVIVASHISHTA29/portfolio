import me from './img/me.jpeg';
import Anonimo from './img/anonimo.png';
import covid from './img/covid.png';
import things from './img/18things.png';
import chatroom from './img/chatroom.png';
import imp2d from './img/imp2d.webp';
import imp3d from './img/imp3d.webp';
import infinite from './img/infinite.webp';
import lockdown from './img/lockdown_wars.jpg';
import realis from './img/realis.png';
import pp from './img/pp.webp';
import easylife from './img/easylife.png';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
  root: {
    width: 894,
  },
  media: {
    height: 550,
  },
});


const coding_lang = ['Python','C++','Java Script','Java','Swift','HTML5','CSS3','PHP','Bootstrap','React JS'];   
const coding_list = coding_lang.map((coding_lang)=>{   
    return <li>{coding_lang}</li>;   
});

const lang = ['English','French','Hindi'];   
const lang_list = lang.map((lang)=>{   
    return <li>{lang}</li>;   
});

function App() {
  const classes = useStyles();
  

  return (
    <div className="app">

      <div className="app__header">
        Portfolio
        <div className="navbar">  
        </div>
      </div>

      <div className="app__main">
        <div className="app__wrapper">

          <div className="app__left">
                  <Card className="app__left__card" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={me}
                        title="Avi Vashishta"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          About Me
                        </Typography>
                        <Typography gutterBottom variant="body2" component="p" style={{color:"#51B983"}} >
                          18 years / Student / Developer 
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        An 18 year old young entrepreneur and a CS student at IIITD , who's also a self taught Web Designer/Developer, a Game Developer, an Author and an Android App Developer. He was one of the first Teen Brand Ambassadors of Fampay and manages Social Media handles of a budding startup called Memboro.com and has worked as a content-writer for them aswell.
                        </Typography>
                      </CardContent>

                    </CardActionArea>
          
                    <CardActions>
                        <Button size="large" color="primary">
                        <a href="https://www.instagram.com/avi_vashishta29">
                          <FontAwesomeIcon icon={faInstagram} className="social" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/avi-vashishta-28b3308a/">
                        <FontAwesomeIcon icon={faLinkedin} className="social"/> 
                        </a>
                        <a href="https://github.com/AVIVASHISHTA29">
                          <FontAwesomeIcon icon={faGithub} className="social"/> 
                        </a> 
                        <a href="https://www.facebook.com/avi.vashishta.5">
                          <FontAwesomeIcon icon={faFacebookF} className="social"/>
                        </a>
                        </Button>
                        <Button size="small" color="primary">
                          
                        </Button>
                    </CardActions>
              </Card>
          </div>
          <div className="app__right">
            <div className="app__right__up">
              <div className="education_qualifications">
                <h2>Education Qualifications</h2>
                <h3>College</h3>
                <div className="written_stuff">
                  <p style={{color:"#51B983"}}>
                  IIITD'24
                  <br/>
                  </p>
                  <p>
                  (Indraprastha Institute of Information Technology , Delhi)
                  <br/>
                  CSB - Computer Science And Biosciences
                  </p>
                </div>
                <h3>Schooling</h3>
                <div className="written_stuff">
                  <p style={{color:"#51B983"}}>
                  Don Bosco School , Alaknanda
                  <br/>
                  PCM CS
                 </p>
                </div>
              </div>

              <div className="education_qualifications">
                <h2>Professional Skills</h2>
                <div className="written_stuff">
                  <ul>
                      <li><h4 style={{color:"#fff"}}>Coding</h4></li>
                      <div style={{color:"#51B983"}}>
                      <ul> {coding_list} </ul>
                      </div>
                      <li> <h4 style={{color:"#fff"}}>MySQL and Databases</h4></li>
                      <li><h4 style={{color:"#fff"}}>Social Media And Digital Advertising</h4> </li>
                      <li><h4 style={{color:"#fff"}}>Professional Writing</h4> </li>
                      <li><h4 style={{color:"#fff"}}>Audio/Video Editing</h4> </li>
                      <li><h4 style={{color:"#fff"}}>Languages</h4></li>
                      <div style={{color:"#51B983"}}>
                      <ul> {lang_list} </ul>
                      </div>
                      <li><h4 style={{color:"#fff"}}>Interests</h4></li>
                      <ul style={{color:"#51B983"}}><li >Stocks And Investing</li></ul>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
        <h1 style={{textAlign:"center"}}>My Projects</h1>
        <div className="app__down">
        <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={Anonimo}
                        title="Anonimo"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          Anonimo.fun
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        An anonymous chatting and inboxing website made from scratch using HTML5, CSS3, PHP and Bootstrap.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://anonimo.fun">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={covid}
                        title="Covid-19 Tracker"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          Covid-19 Tracker Web App
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        A Covid-19 Tracker WebApp made from React , firebase and using an API called disesase.sh.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://covid-19-tracker-be3f0.web.app/">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>
          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={chatroom}
                        title="Avi's Public Chatroom"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          Avi's Public Chatroom
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        A Public Chatrrom Webapp, made as a Messenger-Clone using React. Backend managed through Firebase.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://chatroom-avi.web.app/">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>
          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={infinite}
                        title="Infinite Rider"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          Infinite Rider
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        Infinite Rider is a very addictive game with super interesting and sensitive controls. It adds a new horizon for gamers to interact in 3D and not just 2D.It was my first attempt to build a game just for fun and to kill your free time. Beat highscores and publish them on the website.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://play.google.com/store/apps/details?id=com.Gaming.AVI.InfiniteRider">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={imp2d}
                        title="Impossible Blocks 2D"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                        Impossible Blocks 2D
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        A 2D Game designed to pass your time. Use the joystick to maneuver your way through the falling wave of blocks. The wave gets faster and faster as your score increases.You get 20 Bullets, to save your player from the waves.Be Aware though, your bullets may cause Chaos!
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://play.google.com/store/apps/details?id=com.avivashishta.ImpossibleBlocks1">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={imp3d}
                        title="Impossible Blocks 3D"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                        Impossible Blocks 3D
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        A 3D Game designed to pass your time. Use the joystick to maneuver your way through the falling wave of blocks. The wave gets faster and faster as your score increases.You get 25 Bullets, to save your player from the waves.Be Aware though, your bullets may cause Chaos!
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://play.google.com/store/apps/details?id=com.AviVashishta.ImpossibleBlocks3D">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={pp}
                        title="Pretty Purple"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          Pretty Purple
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        A blogging website started by <a href="https://www.instagram.com/_drishti.makhijani" style={{color:"#51B983"}}> Drishti Makhijani </a> as an initiative to let writers all around the globe express themselves.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://play.google.com/store/apps/details?id=com.pp.prettypurple101">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={lockdown}
                        title="Lockdown Wars"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                        Lockdown Wars
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        Lockdown Wars is a podcast made specially for you to spend your lonely and depressed time! We come with a platform for all of your relateable Quarantine content! Share your lockdown stories with us! This is Lockdown wars! Where your stories are heard.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://anchor.fm/lockdown-wars">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={realis}
                        title="Realis Reality"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          Realis Reality
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        Join in on a journey of a young 16-year old boy who makes it a point to inspire and motivate teenagers around the globe like him. The book takes examples , quotes and speeches from various sources including and especially some of the world's best known influencers . "Life's a hella great ride , so suit up and work hard to live your dreams" "It's all about one step at a time or one page at a time for me." - Avi Vashishta
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://www.amazon.com/Realis-Reality-Time-Wake-Up-ebook/dp/B07SPZQSWB/ref=sr_1_1?dchild=1&qid=1619501084&refinements=p_27%3AAvi+Vashishta&s=digital-text&sr=1-1&text=Avi+Vashishta">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={things}
                        title="18 Things I've Learnt at 18"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          18 Things I've Learnt at 18
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        The Author shares the 18 things he has learned at the Age of 18. A book written by me as a gift to my 18 year old self.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://www.amazon.com/18-Things-Ive-Learned-At-ebook/dp/B08DRBXFBL/ref=sr_1_2?dchild=1&qid=1619500874&refinements=p_27%3AAvi+Vashishta&s=digital-text&sr=1-2&text=Avi+Vashishta">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>
          

          <Card className="projects" style={{backgroundColor: "#1D1E20" , color:"#fff"}}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={easylife}
                        title="EasyLIfe"
                      />
                      
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" color="white" >
                          
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" style={{color:"#51B983"}} >
                          EasyLife.org
                        </Typography>
                        <Typography variant="body1"  component="p" style={{color:"#808082"}}>
                        A freelancing project taken up in early 2020 - An online grocery store made using wix with online payment functionality.
                        </Typography>
                      </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="large" style={{color:"#51B983", border:"0.5px solid #51B983"}} href="https://www.easylifehome.org">
                          Link
                        </Button>
        
                    </CardActions>
          </Card>

        </div>
      </div>

    </div>
    
  );
}


export default App;
