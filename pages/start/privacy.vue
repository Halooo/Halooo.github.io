<template>
  <div>
    <NuxtLayout name="custom">
      <div class="w-full h-full py-20 px-40 flex items-center justify-center">
        <div class="w-2/3 bg-white px-16 py-20 space-y-12 collapse-tems">
          <p class="text-#37352F text-10 font-bold">StarsCollective Privacy Notice</p>
          <div class="text-#37352F font-thin text-lg space-y-8">
            <div>Last updated November 07, 2022</div>
            <div class="space-y-2">
              <div>
                This privacy notice for StarsCollective Films Entertainment Group Inc. (<span class="font-black">"Company," "we," "us,"</span> or<span class="font-black">"our"</span> ), describes how
                and why we might collect, store, use, and/or share (<span class="font-black">"process"</span>) your information when you use our services (<span class="font-black">"Services"</span>),
                such as when you:
              </div>
              <ul class="list-disc pl-8">
                <li class="break-words">
                  Visit our website at <a class="underline underline-offset-2" href="https://starscollective.com">https://starscollective.com</a>, or any website of ours that links to this privacy
                  notice
                </li>
                <li class="break-words">Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <div>
                <span class="font-black">Questions or concerns? </span>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and
                practices, please do not use our Services. If you still have any questions or concerns, please contact us at hello@starscollective.com.
              </div>
            </div>
            <div class="space-y-3">
              <div class="font-black">SUMMARY OF KEY POINTS</div>
              <div class="font-black">
                This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our
                table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.
              </div>
              <div>
                <span class="font-black">What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you
                interact with StarsCollective Films Entertainment Group Inc. and the Services, the choices you make, and the products and features you use.
              </div>
              <div><span class="font-black">Do we receive any information from third parties?</span> We do not receive any information from third parties.</div>
              <div>
                <span class="font-black">How do we process your information?</span>We process your information to provide, improve, and administer our Services, communicate with you, for security and
                fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason
                to do so.
              </div>
              <div>
                <span class="font-black">In what situations and with which parties do we share personal information?</span> We may share information in specific situations and with specific third
                parties.
              </div>
              <div>
                <span class="font-black">What are your rights?</span> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your
                personal information.
              </div>
              <div>
                <span class="font-black">How do you exercise your rights?</span> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance
                with applicable data protection laws.
              </div>
            </div>
          </div>
          <ClientOnly>
            <el-collapse v-model="activeName">
              <el-collapse-item v-for="(item, index) in termsArr" :key="index" :name="index">
                <template #title>
                  <div class="h-full text-#37352F text-left flex items-start">
                    <div class="flex w-6 h-6 relative justify-center items-center">
                      <Icon name="mi:caret-down" class="duration-300" :class="activeName && activeName.includes(index) ? '' : '-rotate-90'" size="24" />
                    </div>
                    <div class="flex-1 mt-0.8">
                      <div class="font-bold text-lg leading-none">
                        <span> {{ index + 1 }}</span>
                        <span>.</span>
                        <span> {{ item.title }}</span>
                      </div>
                    </div>
                  </div>
                </template>
                <div class="pl-8 text-#37352F font-thin text-lg space-y-3">
                  <div v-for="(item_, index_) in item.content" :key="index_" class="" v-html="item_"></div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </ClientOnly>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const activeName = ref()
const termsArr = reactive<any>([
  {
    title: 'WHAT INFORMATION DO WE COLLECT?',
    content: [
      `<div class="font-black">Personal information you disclose to us</div>`,
      `<div><span class="font-black"><i>In Short:</i></span>We collect personal information that you provide to us.</div>`,
      `<div>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</div>`,
      `<div><span class="font-black">Personal Information Provided by You.</span> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</div>`,
      ` <ul class="pl-8 list-disc break-words space-y-2">
        <li>Names</li>
        <li>phone numbers</li>
        <li>email addresses</li>
        <li>mailing addresses.</li>
        <li>job titles</li>
        <li>usernames</li>
        <li>passwords</li>
        <li>contact preferences</li>
        <li>contact or authentication data</li>
        <li>bio</li>
        <li>profile photo</li>
        <li>works and projects info</li>
        </ul> `,
      `<div><span class="font-black">Sensitive Information.</span>We do not process sensitive information.</div>`,
      `<div>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</div>`,
      `<div class="font-black">Information automatically collected</div>`,
      `<div><span class="font-black"><i>In Short:</i></span>Some information - such as your Internet Protocol (lP) address and/or browser and device characteristics - is collected automatically when you visit our Services.</div>`,
      `<div>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</div>`,
      `<div class="font-black">The information we collect includes:</div>`,
      ` <ul class="pl-8 list-disc break-words space-y-2">
        <li>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
        <li>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
        <li>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
        </ul> `
    ]
  },
  {
    title: 'HOW DO WE PROCESS YOUR INFORMATION?',
    content: [
      `<div><span class="font-black"><i>In Short:</i> </span>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</div>`,
      `<div class="font-black">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</div>`,
      ` <ul class="pl-8 list-disc break-words space-y-2">
        <li><span class="font-black">To facilitate account creation and authentication and otherwise manage user accounts.</span> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
        <li><span class="font-black">To request feedback.</span>We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
        <li><span class="font-black">To protect our Services.</span> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
        <li><span class="font-black">To save or protect an individual's vital interest.</span> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
        </ul> `
    ]
  },
  {
    title: 'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?',
    content: [
      `<div><span class="font-black"><i>In Short:</i></span>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</div>`,
      `<div class="font-black">If you are located in the EU or UK, this section applies to you.</div>`,
      `<div>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</div>`,
      ` <ul class="pl-8 list-disc break-words space-y-2">
        <li><span class="font-black">Consent.</span> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. </li>
        <li><span class="font-black">Legitimate Interests.</span>We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to: </li>
        <li>Diagnose problems and/or prevent fraudulent activities</li>
        <li>Understand how our users use our products and services so we can improve user experience</li>
        <li><span class="font-black">Legal Obligations. </span>We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
        <li><span class="font-black">Vital Interests. </span> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
        </ul> `,
      `<div class="font-black">If you are located in Canada, this section applies to you.</div>`,
      `<div>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</div>`,
      `<div>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</div>`,
      ` <ul class="pl-8 list-disc break-words space-y-2">
        <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
        <li>For investigations and fraud detection and prevention</li>
        <li>For business transactions provided certain conditions are met</li>
        <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
        <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
        <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
        <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
        <li>lf it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
        <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
        <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
        <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
        <li>If the information is publicly available and is specified by the regulations</li>
        </ul> `
    ]
  },
  {
    title: 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
    content: [
      `<div><span class="font-black"><i>In Short:</i></span> We may share information in specific situations described in this section and/or with the following third parties.</div>`,
      `<div>We may need to share your personal information in the following situations:</div>`,
      ` <ul class="pl-8 list-disc break-words space-y-2">
      <li><span class="font-black">Business Transfers.  </span> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
      <li><span class="font-black">Affiliates. </span>We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
      <li><span class="font-black">Business Partners.</span>We may share your information with our business partners to offer you certain products, services, or promotions.</li>

      </ul> `
    ]
  },
  {
    title: 'HOW LONG DO WE KEEP YOUR INFORMATION?',
    content: [
      `<div><span class="font-black"><i>In Short:</i></span>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</div>`,
      `<div>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than six (6) months past the termination of the user's account.</div>`,
      `<div>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</div>`
    ]
  },
  {
    title: 'WHAT ARE YOUR PRIVACY RIGHTS?',
    content: [
      `<div><span class="font-black"><i>In Short:</i></span> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</div>`,
      `<div>
      In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (ii)i to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section<span class="font-black"> "HOW CAN YOU CONTACT US ABOUI THIS NOTICE?"</span> below.
      </div>`,
      `<div>We will consider and act upon any request in accordance with applicable data protection laws.</div>`,
      `<div>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:
        <a class="underline underline-offset-2" href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index%2520en.htm.">https://ec.europa.eu/justice/data-protection/bodies/authorities/index en.htm.</a>
        </div>`,
      `<div>If you are located in Switzerland, the contact details for the data protection authorities are available here:
          <a class="underline underline-offset-2" href="https://www.edoeb.admin.ch/edoeb/en/home.html.">https://www.edoeb.admin.ch/edoeb/en/home.html.</a></div>`,
      `<div>
          <span class="font-black"> Withdrawing your consent:</span> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section<span class="font-black">  "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</span> below or updating your preferences.
       </div>`,
      `<div>
        However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
        </div>`,
      `<div class="font-black">Account Information</div>`,
      `<div>If you would at any time like to review or change the information in your account or terminate your account, you can:</div>`,
      ` <ul class="pl-8 list-disc break-words space-y-2">
          <li>Log in to your account settings and update your user account.</li>
          </ul>`,
      `<div>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</div>`
    ]
  },
  {
    title: 'CONTROLS FOR DO-NOT-TRACK FEATURES',
    content: [
      '<div>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</div>'
    ]
  },
  {
    title: 'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
    content: [
      `<div><span class="font-black"><i>In Short:</i></span>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</div>`,
      `California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.`,
      `If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address`,
      `associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).`
    ]
  },
  {
    title: 'DO WE MAKE UPDATES TO THIS NOTICE?',
    content: [
      `<div><span class="font-black"><i>In Short:</i></span> Yes, we will update this notice as necessary to stay compliant with relevant laws.`,
      `<div>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</div>`
    ]
  },
  {
    title: 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
    content: [
      `<div>If you have questions or comments about this notice, you may email us at info@starscollective.com or by post to:<br/>
StarsCollective Films Entertainment Group Inc. 9100 Wilshire Blvd, Suit # 340W<br/>
Beverly Hills, CA 90212<br/>
United States</div>`
    ]
  },
  {
    title: 'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
    content: [
      `Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by emailing to  <a class="underline underline-offset-2" href="mailto:info@starscollective.com">info@starscollective.com</a>`
    ]
  }
])
</script>
