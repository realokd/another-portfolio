import dynamic from 'next/dynamic';
import { PersonalDetailsObject, ProjectObject } from '@utils/staticData';
import { PersonalDetailsContext, ProjectDetailsContext } from '@utils/contexts';
import { PersonalDetails, Project } from '@utils/types';
import { Footer, Loader, Navbar, SocialBar } from '@shared-components';

const HomePage = dynamic(() => import('../components/home/index'), {
  ssr: false,
  loading: () => <Loader />
});

type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};
const Home = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  return (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectDetails}>
          <Navbar />
          <SocialBar />
          <HomePage />
          <Footer />
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  );
};

export default Home;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[] };
}> {
  const personalDetails: PersonalDetails = PersonalDetailsObject as PersonalDetails;
  const projectDetails = ProjectObject as Project[];
  return { props: { personalDetails, projectDetails } };
}
