import { Container, Text, LocationPermissionForm } from '~components';

const Settings = () => {
  return (
    <Container>
      <Text>Settings Screen</Text>
      <LocationPermissionForm
        btnText="Finish"
        onSubmit={() => console.log('LocationPermissionForm')}
      />
    </Container>
  );
};

export default Settings;
