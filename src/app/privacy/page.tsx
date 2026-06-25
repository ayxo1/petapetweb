
const page = () => {
  return (
    <div className="p-8">

      <header>
        <h1 className="font-bold text-lg">Privacy Policy for pet-a-pet</h1>
        <p className="mb-2"><i>Last Updated: June 6, 2026</i></p>
        <h2>Welcome to pet-a-pet (the &quot;App&quot;), a mobile application designed to connect pet owners and people who love animals in general, facilitate pet adoptions of rescues and sheltered pets, and help organize meetups and events.</h2>
        <p>Your privacy is extremely important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use pet-a-pet. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use the App.</p>
      </header>

      <main className="flex flex-col gap-3">

        <section className="mt-2 flex flex-col gap-3" aria-label="information we collect">
          <h2 className="font-bold text-lg">1. Information We Collect</h2>
          <p>We collect information about you in a variety of ways when you use the App. The information we may collect includes:</p>
          <section aria-label="personal data">
            <h3>A. Personal Data</h3>
            <ul className="list-disc list-inside">
              <li><b>Account Information:</b> When you register, sign up, or sign in, we collect your email address, password, and preference configurations.</li>
              <li><b>OAuth Credentials:</b> If you choose to log in using third-party services (such as Apple OAuth), we collect authenticating information provided by those services.</li>
              <li><b>Profile Information:</b> Not be barred from using the Service under applicable laws.</li>
              <li><b>Shelter and Pet Details:</b> If you register as a shelter or list a pet, we collect related details such as the shelter name, contact details, pet species, breed, age, description, adoption status, and images of pets.</li>
            </ul>
          </section>
          <section aria-label="location data">
            <h3>B. Location Data</h3>
            <ul className="list-disc list-inside">
              <li><b>Geographical Coordinates:</b> We request access to location services or coordinates (latitude and longitude) to calculate distances and display pets, shelters, or events near you.</li>
              <li><b>Search Preferences:</b> We store your preferred search radius (e.g., 50 miles/km) to customize the matchmaking and feed experience.</li>
            </ul>
          </section>
          <section aria-label="communications and user-generated content">
            <h3>C. Communications and User-Generated Content</h3>
            <ul className="list-disc list-inside">
              <li><b>Chat Messages:</b> We collect and store messages and chat history sent between users (such as chats between pet seekers and shelters) to facilitate communication.</li>
              <li><b>Reports and Feedback:</b> If you report another user, pet listing, event, or contact support, we collect the reporter’s user ID, target user/listing ID, reason, and description to investigate and moderate content.</li>
              <li><b>Deletion Reason:</b> If you choose to delete your account, we may collect your optional feedback explaining why you decided to delete the account to help us improve pet-a-pet.</li>
            </ul>
          </section>
        </section>

        <section className="mt-2 flex flex-col gap-3" aria-label="how we use your information">
          <h2 className="font-bold text-lg">2. How We Use Your Information</h2>
          <p>We use the information we collect to operate, maintain, and improve the App, including:</p>
            <ul className="list-disc list-inside">
              <li>Creating and managing your user account and profile.</li>
              <li>Matching pet seekers with owners and vice versa based on search distance and species preferences.</li>
              <li>Enabling in-app messaging and real-time chat between matched users and between users and shelter representatives.</li>
              <li>Facilitating the creation, updating, and viewing of pet adoption profiles.</li>
              <li>Allowing users organize events and meetups.</li>
              <li>Reviewing reports and implementing community guidelines (including blocking or unmatching users) to ensure a safe environment.</li>
              <li>Debugging, troubleshooting, and resolving issues reported by users.</li>
            </ul>
        </section>

        <section className="mt-2 flex flex-col gap-3" aria-label="sharing and disclosure of your information">
          <h2 className="font-bold text-lg">3. Sharing and Disclosure of Your Information</h2>
          <p>We do not sell, rent, or trade your personal data. We may share information in the following circumstances:</p>
          <ul className="list-disc list-inside">
            <li><b>Public Profile Information:</b> Other users of the App can see your public profile, pet listings, and events to facilitate matches.</li>
            <li><b>Service Providers:</b> We store data using backend services like PocketBase and query third-party mapping providers to convert coordinates or show maps. These providers only use the data to perform services on our behalf.</li>
            <li><b>Legal Requirements:</b> We may disclose your information if required by law, subpoena, or to protect the safety, rights, or property of our users or the public.</li>
          </ul>
        </section>

        <section className="mt-2 flex flex-col gap-3" aria-label="data retention and account deletion">
          <h2 className="font-bold text-lg">4. Data Retention and Account Deletion</h2>
          <p>We retain your personal data only as long as necessary to provide the services you requested.</p>
          <ul className="list-disc list-inside">
            <li><b>Account Deletion:</b> You can delete your account at any time directly within the App via the Profile Settings.</li>
            <li><b>Immediate Deletion:</b> 
              When you initiate an account deletion:
              <ul className="list-disc list-inside ml-5">
                <li>Your user profile, personal information, and authentication credentials are deleted from our servers.</li>
                <li>Your pet profiles and listings are permanently removed.</li>
                <li>Note: Messages you have sent to other users may remain visible in their active chats, but your profile details will show as a deleted user.</li>
              </ul>
            </li>
            <li><b>Irreversibility:</b> Account deletion is permanent and cannot be undone.</li>
          </ul>
        </section>

        <section className="mt-2 flex flex-col gap-3" aria-label="security of your information">
          <h2 className="font-bold text-lg">5. Security of Your Information</h2>
          <p>We use reasonable administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. You share information at your own risk.</p>
        </section>

        <section className="mt-2 flex flex-col gap-3" aria-label="children's privacy">
          <h2 className="font-bold text-lg">6. Children&apos;s Privacy</h2>
          <p>Our services are not intended for people under the age of 18. We do not knowingly collect personal information from anyone under 18. If we learn that we have collected personal information from someone under 18 without verification of parental consent, we will delete that information as quickly as possible.</p>
        </section>

        <section className="mt-2 flex flex-col gap-3" aria-label="contact us">
          <h2 className="font-bold text-lg">7. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <ul className="list-disc list-inside">
            <li><b>Email:</b> 
              <address className="inline">
                <a href='mailto:petapetsupport@gmail.com' > petapetsupport@gmail.com</a>
              </address>
            </li>
            <li><b>Website:</b> 
              <address className="inline">
                <a href='petapetapp.com'> petapetapp.com</a>
              </address>
            </li>
          </ul>
        </section>

      </main>
      
    </div>
  );
};

export default page;