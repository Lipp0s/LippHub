import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  background-color: #0a0a0a;
`;

const Title = styled.h1`
  color: #ff9000;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
`;

const Content = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 144, 0, 0.1);
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid #ff9000;
`;

const InfoSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Section = styled.div`
  margin: 2rem 0;
`;

const SectionTitle = styled.h2`
  color: #ff9000;
  margin: 2rem 0 1rem 0;
  border-bottom: 2px solid #ff9000;
  padding-bottom: 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  background-color: #252525;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    background-color: #303030;
  }
`;

const LanguageLevel = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  gap: 0.5rem;
`;

const LevelIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#ff9000' : '#404040'};
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Content>
        <ProfileSection>
          <ProfileImage src="https://i.pinimg.com/736x/62/f5/a6/62f5a603cfd879fe20695185eb795fac.jpg" alt="Profile" />
          <InfoSection>
            <h2 style={{ color: '#ff9000' }}>Lipp</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Software Developer | Student at ITIS Galileo Galilei Arezzo
            </p>
            <p>📍 Arezzo, Italy | ✉️ filip.loca@gmail.com | 📱 (+39) 3920022511</p>
          </InfoSection>
        </ProfileSection>

        <SectionTitle>Education</SectionTitle>
        <Card>
          <h3>ITIS Galileo Galilei Arezzo</h3>
          <p>2020 - Current</p>
          <p>Level in EQF: EQF level 3</p>
        </Card>

        <SectionTitle>Projects</SectionTitle>
        <Grid>
          <Card>
            <h3>Duracell</h3>
            <p>May 2024</p>
            <ul>
              <li>2048 Game Implementation</li>
              <li>Coin Toss with Variable Probabilities</li>
              <li>Java & Swing Development</li>
            </ul>
            <a href="https://github.com/Lipp0s/Duracell" style={{color: '#ff9000'}}>View on GitHub</a>
          </Card>
        </Grid>

        <SectionTitle>Language Skills</SectionTitle>
        <Grid>
          <Card>
            <h3>Italian</h3>
            <p>Mother Tongue</p>
          </Card>
          <Card>
            <h3>English</h3>
            <LanguageLevel>
              <span>B2</span>
              {[1,2,3,4].map(i => <LevelIndicator key={i} active={true} />)}
              <LevelIndicator active={false} />
            </LanguageLevel>
          </Card>
          <Card>
            <h3>Spanish</h3>
            <LanguageLevel>
              <span>A2</span>
              {[1,2].map(i => <LevelIndicator key={i} active={true} />)}
              {[1,2,3].map(i => <LevelIndicator key={i} active={false} />)}
            </LanguageLevel>
          </Card>
        </Grid>

        <SectionTitle>Digital Skills</SectionTitle>
        <Grid>
          {['Microsoft Office', 'Java Programming', 'Windows', 'Google Chrome', 'Social Networks'].map(skill => (
            <Card key={skill}>
              <h3>{skill}</h3>
            </Card>
          ))}
        </Grid>

        <SectionTitle>Interests & Hobbies</SectionTitle>
        <Grid>
          {[
            'Software Programming',
            'Animal Care & Volunteering',
            'Technology & Innovation',
            'Video Games & Esports',
            'Cooking'
          ].map(hobby => (
            <Card key={hobby}>
              <h3>{hobby}</h3>
            </Card>
          ))}
        </Grid>
      </Content>
    </AboutContainer>
  );
};

export default About;