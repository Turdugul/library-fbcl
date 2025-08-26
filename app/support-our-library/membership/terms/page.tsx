import { Metadata } from 'next'
import { Button } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions - FBCL Membership',
  description: 'Terms and conditions for FBCL library membership and computer use.',
}

export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-[#008080] text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-responsive-4xl md:text-responsive-6xl text-[#FFBF00] font-bold mb-4 sm:mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Friern Barnet Community Library
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/support-our-library/membership">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Return to Membership Form
                </Button>
              </Link>
            </div>

            {/* Terms Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">
                Terms and conditions for membership and computer use.
              </h2>

              <h3 className="text-xl font-semibold mb-4">Loans</h3>
              <p className="mb-6">
                Every member (whether adult or youth) is able to borrow up to 6 items for an initial period of 28 days.
              </p>

              <h3 className="text-xl font-semibold mb-4">Computer use</h3>
              <p className="mb-6">
                Please also read the Terms and Conditions relating specifically to computer use, which form part of these overall Terms and Conditions.
              </p>

              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="mb-4">
                Personal data collected on this form will only be used for the purpose of membership of the Friern Barnet Community Library. This allows you to use the computers and to borrow books. Your personal data may also be used to invite you to attend, and vote at, the AGM.
              </p>
              <p className="mb-4">
                Only personal data required to process the borrower application will be stored. We will securely store the paper copy and the Electronic Library Management System is password protected.
              </p>
              <p className="mb-4">
                By becoming a member of the Friern Barnet Community Library, you consent to your personal data being held.
              </p>
              <p className="mb-4">
                Your personal data relating to your membership may be seen by the Library Trustees, the Volunteer Librarian, our IT expert and our Library Volunteers.
              </p>
              <p className="mb-4">
                Your personal data will not be passed to any third party.
              </p>
              <p className="mb-6">
                If you would like to know the personal data held relating to you as a library member, please email{' '}
                <a href="mailto:friernbarnetcommunitylibrary@gmail.com" className="text-primary-600 hover:text-primary-700 underline">
                  friernbarnetcommunitylibrary@gmail.com
                </a>
              </p>

              <h3 className="text-xl font-semibold mb-4">General Terms</h3>
              <p className="mb-4">
                If you no longer wish to be a member, please email:{' '}
                <a href="mailto:friernbarnetcommunitylibrary@gmail.com" className="text-primary-600 hover:text-primary-700 underline">
                  friernbarnetcommunitylibrary@gmail.com
                </a>{' '}
                to request deletion of your membership. You must also destroy your library card. We will delete or shred (as appropriate) all electronic and paper records of your personal data.
              </p>
              <p className="mb-4">
                Library users are requested to keep noise to a minimum and to avoid disturbing other library users in any way.
              </p>
              <p className="mb-4">
                Library users must respect the privacy of other library users.
              </p>
              <p className="mb-4">
                Verbal or physical abuse against staff, volunteers or other library members will NOT be tolerated and will lead to library membership and the member's computer account being discontinued and the person being barred from the library premises.
              </p>
              <p className="mb-4">
                Please note: If you have been barred from the library for non-compliance with these Terms & Conditions, we reserve the right to retain your name, telephone number and email address in case you try to re-join the library.
              </p>
              <p className="mb-6">
                Friern Barnet Community Library reserves the right to change these Terms and Conditions at any time. Any changes will be published on FBCL's website (
                <a href="https://fbclibrary.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
                  https://fbclibrary.org
                </a>
                ), and you can ask for a copy from the front desk at FBCL.
              </p>

              <div className="text-center italic text-gray-600 mb-8">
                The Trustees of Friern Barnet Community Library, January 2021
              </div>

              <h2 className="text-2xl font-bold mb-6">
                Terms & conditions for computer use
              </h2>
              <p className="mb-4">
                You can have your own computer account and limited online storage space at Friern Barnet Community Library (FBCL).
              </p>
              <p className="mb-4">
                These Terms & Conditions relating to computer use are part of the FBCL Member Terms & Conditions. Taken together, they apply to all library members.
              </p>
              <p className="mb-4">
                We are required to store the personal data you provide to us to register you as a computer user. This data is stored securely and is not accessible by anyone outside of the IT Department.
              </p>
              <p className="mb-4">
                We aim to provide computer use and internet access whenever the library is open. However there may be times when this is not possible.
              </p>
              <p className="mb-4">
                FBCL reserves the right to refuse to create a computer account for any member.
              </p>
              <p className="mb-4">
                FBCL reserves the right to delete a user account, without notice, if the user breaches any Terms and Conditions.
              </p>
              <p className="mb-4">
                Computer users must keep noise to a minimum while using computers, and use headphones when listening to music, YouTube videos etc. Headphones may be available from the library desk.
              </p>
              <p className="mb-4">
                Users must respect the privacy of other computer users.
              </p>
              <p className="mb-4">
                Users must respect other users and FBCL staff at all times. Abusive or violent behaviour will not be tolerated.
              </p>
              <p className="mb-4">
                Users must not damage or misuse the computer equipment.
              </p>
              <p className="mb-4">
                Users must not try to modify or hack our software, or view illegal or inappropriate websites (including but not limited to, pornography, or sites which could be construed as relating to terrorism).
              </p>
              <p className="mb-4">
                If illegal activity is suspected, we may need to access your computer account. This will be done by the IT staff only and in confidence.
              </p>
              <p className="mb-4">
                Users are responsible for their username and password and must not allow others to use their login details.
              </p>
              <p className="mb-6">
                If a member is found to have abused any of our systems or fails to comply with our Terms and Conditions in any way, they will have their membership and computer account terminated and will be barred from entering Friern Barnet Community Library.
              </p>

              <h3 className="text-xl font-semibold mb-4">Using our computers</h3>
              <p className="mb-4">
                The computer equipment and IT staff time are not funded by FBCL and we ask that for all computer-related issues, you be patient and allow us time to resolve your problems.
              </p>
              <p className="mb-4">
                The library volunteers will help you log into your account the first time you use it, but will not be able to offer further technical help beyond that.
              </p>
              <p className="mb-4">
                We do not recommend you use the library computers to store personal information or files, such as photographs or music files, as this information can be deleted without notice.
              </p>
              <p className="mb-4">
                The folder created for each user is limited in size, due to space limitations within the storage system. Each account has 300Mb, which is enough to browse the web and download email attachments, but not to download films, photographs or music files. Remember that the computers are not personal computers and should not be used as a permanent file store.
              </p>
              <p className="mb-4">
                The timer application allows one hour of free computer use. You may request to have your computer session extended by the Library Volunteers for a small fee, but we cannot guarantee that extension will always be possible.
              </p>
              <p className="mb-4">
                For further information on how we store your personal data relating to your registration as a computer user and how to request deletion of this data, please email Colin Thomson –{' '}
                <a href="mailto:contact@coolin.co.uk" className="text-primary-600 hover:text-primary-700 underline">
                  contact@coolin.co.uk
                </a>
              </p>
              <p className="mb-6">
                For any general queries regarding the computer accounts please email Colin Thomson –{' '}
                <a href="mailto:contact@coolin.co.uk" className="text-primary-600 hover:text-primary-700 underline">
                  contact@coolin.co.uk
                </a>{' '}
                giving as much detail as possible.
              </p>

              {/* Return Button */}
              <div className="text-center mt-12">
                <Link href="/support-our-library/membership">
                  <Button className="flex items-center gap-2">
                    Return to your Library Membership Form
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
