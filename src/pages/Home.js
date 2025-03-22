import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  min-height: 100vh;
  background-color: #0a0a0a;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 5rem;
    margin: 0;
    font-weight: bold;
    letter-spacing: -2px;
    
    span {
      color: #ff9000;
      background-color: #000;
      padding: 0.2rem 1rem;
      border-radius: 4px;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ff9000;
      }
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #888;
  margin: 1rem 0;
`;

const ProjectsSection = styled.div`
  padding: 2rem 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h2 {
    color: #ff9000;
    font-size: 2rem;
    margin: 0;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #333;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(255, 144, 0, 0.2);
    border-color: #ff9000;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #333;
`;

const ProjectInfo = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  color: #ff9000;
  margin: 0;
  font-size: 1.4rem;
`;

const ProjectStats = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.9rem;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1px solid #333;
`;

const ProjectTag = styled.span`
  background-color: #ff9000;
  color: black;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Categories = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? '#ff9000' : '#1a1a1a'};
  color: ${props => props.active ? 'black' : 'white'};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background-color: ${props => props.active ? '#ff7000' : '#252525'};
  }
`;

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const projectsData = [
          {
            title: "Duracell",
            image: "https://raw.githubusercontent.com/Lipp0s/Duracell/main/preview.png",
            repo: "Lipp0s/Duracell",
            date: "2024",
            tech: "Java"
          },
          {
            title: "LippHub",
            image: "https://raw.githubusercontent.com/Lipp0s/LippHub/main/preview.png",
            repo: "Lipp0s/LippHub",
            date: "2024",
            tech: "React"
          },
          {
            title: "C calculator",
            image: "https://raw.githubusercontent.com/Lipp0s/Trabalho-Final-AED1/main/preview.png",
            repo: "Lipp0s/C",
            date: "2023",
            tech: "C"
          },
          {
            title: "C BMI ",
            image: "https://raw.githubusercontent.com/Lipp0s/Trabalho-Pratico-1-AED1/main/preview.png",
            repo: "Lipp0s/C",
            date: "2023",
            tech: "C"
          },
          {
            title: "C analyzer",
            image: "https://raw.githubusercontent.com/Lipp0s/Trabalho-Pratico-2-AED1/main/preview.png",
            repo: "Lipp0s/C",
            date: "2023",
            tech: "C"
          },
          {
            title: "C game",
            image: "https://raw.githubusercontent.com/Lipp0s/Trabalho-Pratico-3-AED1/main/preview.png",
            repo: "Lipp0s/C",
            date: "2023",
            tech: "C"
          },
          {
            title: "C temperature",
            image: "https://raw.githubusercontent.com/Lipp0s/Trabalho-Pratico-4-AED1/main/preview.png",
            repo: "Lipp0s/C",
            date: "2023",
            tech: "C"
          }
        ];

        const updatedProjects = await Promise.all(
          projectsData.map(async (project) => {
            const response = await fetch(`https://api.github.com/repos/${project.repo}`);
            const data = await response.json();
            return {
              ...project,
              stars: data.stargazers_count,
              forks: data.forks_count,
              watchers: data.watchers_count,
              link: `https://github.com/${project.repo}`
            };
          })
        );

        setProjects(updatedProjects);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchGithubStats();
  }, []);

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true;
    return project.tech === activeCategory;
  });

  return (
    <HomeContainer>
      <HeroSection>
        <Logo>
          <h1><span>Lipp</span>Hub</h1>
        </Logo>
        <Subtitle>Que pro.</Subtitle>
      </HeroSection>

      <ProjectsSection>
        <SectionHeader>
          <h2>Featured Projects</h2>
          <Categories>
            <CategoryButton 
              active={activeCategory === 'All'} 
              onClick={() => setActiveCategory('All')}
            >
              All
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'Java'} 
              onClick={() => setActiveCategory('Java')}
            >
              Java
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'React'} 
              onClick={() => setActiveCategory('React')}
            >
              React
            </CategoryButton>
            <CategoryButton 
              active={activeCategory === 'C'} 
              onClick={() => setActiveCategory('C')}
            >
              C
            </CategoryButton>
          </Categories>
        </SectionHeader>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} onClick={() => window.open(project.link, '_blank')}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectStats>
                  <span>🌟 {project.stars}</span>
                  <span>🔄 {project.forks}</span>
                  <ProjectTag>{project.tech}</ProjectTag>
                </ProjectStats>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </HomeContainer>
  );
};

export default Home;