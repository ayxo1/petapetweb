
const page = () => {
  return (
    <div className="p-8">

        <header>
            <h1 className="font-bold text-lg">Terms of Service for pet-a-pet</h1>
            <p className="mb-2"><i>Last Updated: June 6, 2026</i></p>
            <h2>Welcome to pet-a-pet (the &quot;App&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the pet-a-pet mobile application, website, and related services (collectively, the &quot;Service&quot;).</h2>
            <p>By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.</p>
        </header>

        <main className="flex flex-col gap-3">

            <section className="mt-2 flex flex-col gap-3" aria-label="eligibility">
                <h2 className="font-bold text-lg">1. Eligibility</h2>
                <section>
                    <h3>To use the Service, you must:</h3>
                    <ul className="list-disc list-inside">
                        <li>Be at least 18 years old (or the age of majority in your jurisdiction) to list pets for adoption or manage a shelter account.</li>
                        <li>Be at least 18 years old to use the Service as a pet seeker.</li>
                        <li>Not be barred from using the Service under applicable laws.</li>
                    </ul>
                </section>
            </section>

            <section className="mt-2 flex flex-col gap-3" aria-label="user accounts">
                <h2 className="font-bold text-lg">2. User Accounts</h2>
                <ul className="list-disc list-inside">
                    <li>Registration: You must provide accurate and complete information when creating an account. You are responsible for keeping your credentials confidential.</li>
                    <li>Account Security: You are solely responsible for all activities that occur under your account. If you suspect any unauthorized access, you must notify support immediately.</li>
                    <li>Account Deletion: You can delete your account at any time. We reserve the right to suspend or terminate accounts that violate these Terms.</li>
                </ul>
            </section>

            <section className="mt-2 flex flex-col gap-3" aria-label="user conduct and content (ugc)">
                <h2 className="font-bold text-lg">3. User Conduct and Content (UGC)</h2>
                <p>pet-a-pet allows users to upload profiles, pet listings, events, photos, and send messages (&quot;User-Generated Content&quot; or &quot;UGC&quot;).</p>
                <section aria-label="prohibited content">
                    <h3>A. Prohibited Content</h3>
                    <p>You agree not to post, upload, or transmit any UGC that:</p>
                    <ul className="list-disc list-inside">
                        <li>Is fraudulent, misleading, or deceptive (e.g., fake shelters, false pet information, selling illegal/restricted animals).</li>
                        <li>Is abusive, defamatory, harassing, threatening, hateful, or sexually explicit.</li>
                        <li>Violates the intellectual property or privacy rights of any third party.</li>
                        <li>Promotes illegal activities or animal cruelty.</li>
                    </ul>
                </section>
                
                <section aria-label="prohibited activities">
                    <h3>B. Prohibited Activities</h3>
                    <p>You agree not to:</p>
                    <ul className="list-disc list-inside">
                        <li>Harass, threaten, or bully other users, shelters, or seekers.</li>
                        <li>Use the Service for commercial transactions unrelated to pet adoption (such as pet selling for commercial profit/puppy mills, spamming, or advertising other products).</li>
                        <li>Impersonate any person or entity, or falsely claim affiliation with an animal shelter or rescue organization.</li>
                        <li>Use automated scripts, bots, or scraping tools to harvest data from the Service.</li>
                    </ul>
                </section>
            </section>

            <section className="mt-2 flex flex-col gap-3" aria-label="moderation, reporting, and safety">
                <h2 className="font-bold text-lg">4. Moderation, Reporting, and Safety</h2>
                <p>To ensure a safe environment, pet-a-pet actively enforces community standards:</p>
                <ul className="list-disc list-inside">
                    <li>Reporting and Flagging: Users have access to tools across all major surfaces of the App (pet listings, shelter profiles, event pages, user cards, and chat interfaces) to report UGC or users that violate these Terms.</li>
                    <li>Blocking and Unmatching: You can block or unmatch users on the chat page at any time to immediately cut off communication and hide your profile from them.</li>
                    <li>Our Right to Moderate: We reserve the right, but do not have the obligation, to review, edit, flag, or remove any UGC, or suspend/terminate user accounts that we determine in our sole discretion violate these Terms or threaten safety.</li>
                </ul>
            </section>

            <section className="mt-2 flex flex-col gap-3" aria-label="disclaimers and limitation of liability">
                <h2 className="font-bold text-lg">5. Disclaimers and Limitation of Liability</h2>
                <ul className="list-disc list-inside">
                    <li>&quot;As-Is&quot; Service: The Service is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We make no warranties regarding the accuracy, completeness, or safety of pet listings, shelter registrations, or user profiles.</li>
                    <li>No Guarantee: pet-a-pet is a matchmaking platform. We do not inspect pets, verify shelter licenses offline, or guarantee the health, temperament, or availability of any pet listed. All adoptions are completed at the users&apos; own risk.</li>
                    <li>Limitation of Liability: To the maximum extent permitted by law, pet-a-pet, its developers, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Service, animal interactions, or transactions between users.</li>
                </ul>
            </section>

            <section className="mt-2 flex flex-col gap-3" aria-label="modifications to terms">
                <h2 className="font-bold text-lg">6. Modifications to Terms</h2>
                <p>We may update these Terms from time to time. If we make material changes, we will notify you by updating the &quot;Last Updated&quot; date or through in-app notifications. Your continued use of the Service after changes are posted constitutes acceptance of the new Terms.</p>
            </section>

        </main>

    </div>
  );
};

export default page;