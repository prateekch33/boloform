import React from "react";
import "../assets/css/faq.css"

export default function Faq() {
  function show(x) {
    var desc = document.querySelectorAll(".faq .desc");
    if (desc[x].style.display === "block") desc[x].style.display = "none";
    else desc[x].style.display = "block";
    for (var i = 0; i < desc.length; i++) {
      if (i !== x) desc[i].style.display = "none";
    }
  }
  return (
    <>
      <div className="faq">
        <div className="heading">
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="list">
          <div className="column">
            <div className="items" onClick={()=>show(0)}>
              <b>What is the difference between email and request?</b>
              <div className="desc">
                A request needs to send multiple emails to different recipients
                and respondent (optional) for approval. This means that one
                request may costs lots of email quota.
              </div>
            </div>
            <div className="items" onClick={()=>show(1)}>
              <b>What will happen if I run out of email quota?</b>
              <div className="desc">
                When you run out of email quota, the addon will temporary stop
                running. You will have to wait for quota renewal to send email
                again. If you are Free user, you can purchase Individual Plan
                and enjoy much higher quotas (at least 5000 emails/month) and
                unlimited emails sent per day.
              </div>
            </div>
            <div className="items" onClick={()=>show(2)}>
              <b>What will happen to my data if I cancel my subscription?</b>
              <div className="desc">
                You data will still be stored in our database even after your
                subscription cancellation. If you want to remove your data,
                please contact to us via support@boloforms.com.
              </div>
            </div>
            <div className="items" onClick={()=>show(3)}>
              <b>I receive a permission error when I try to setup the Add-on</b>
              <div className="desc">
                This is a known issue with Google permissions and it happens
                when you are logged in with more than one Google account. Try to
                sign out of all account except your main account. Alternatively,
                try Guest/Incognito mode.
              </div>
            </div>
            <div className="items" onClick={()=>show(4)}>
              <b>
                Can I use the addon if my organisation does not use Google
                accounts?
              </b>
              <div className="desc">
                Yes, but be aware that Form owner/adminstrator in particular
                still needs Google account. This is because the addon sends
                email on your Gmail behalf.
              </div>
            </div>
            <div className="items" onClick={()=>show(5)}>
              <b>How can I contact support?</b>
              <div className="desc">
                For any additional questions, you can contact us on
                support@boloforms.com or on WhatsApp at +91-8830631677 anytime.
              </div>
            </div>
            <div className="items" onClick={()=>show(6)}>
              <b>
                Why does the approval workflow sometimes work smoothly and other
                times throws errors?
              </b>
              <div className="desc">
                If you suddenly have an error running when using an add-on,
                please let us know by sending an email to support@boloforms.com.
                Our team will contact you as soon as possible to look into the
                issue. If you need an expedited support, feel free to message us
                on WhatsApp at +91-8830631677.
              </div>
            </div>
          </div>
          <div className="column">
            <div className="items" onClick={()=>show(7)}>
              <b>
                How to calculate the number of requests based on email quota?
              </b>
              <div className="desc">
                Emails & Requests are different. For examples, if you set up a
                workflow with 2 recipients, a form respondent submit a request
                then 2 emails counted to be sent to 2 recipients. In average, a
                request from our users consists of 4 emails. That is why free
                plan (500 emails) is calculated to be approximately 125 requests
                per month. The smaller number of recipient you set up in the
                workflow, the more request you have with a fixed email quota and
                vice versa.
              </div>
            </div>
            <div className="items" onClick={()=>show(8)}>
              <b>Why the addon requires access to my Google Drive?</b>
              <div className="desc">
                Permission to Google Drive is only necessary for the addon to
                perform actions related to your connected Google Form and
                spreadsheet on your behalf. In no circumstance that we will use
                those files for any other purposes or sharing to third parties.
              </div>
            </div>
            <div className="items" onClick={()=>show(9)}>
              <b>How does approval workflow feature work?</b>
              <div className="desc">
                When a Form Respondent sends a request, the addon will
                automatically send approval notification email to your specified
                recipient(s). Recipient can make One-click approve/reject
                decision on email, or, approve/reject & comment on BoloForms
                Approvals website. Finally, an email will be sent to all
                recipients notifying the final result.
              </div>
            </div>
            <div className="items" onClick={()=>show(10)}>
              <b>Does recipient need Google Account?</b>
              <div className="desc">
                No. Recipients do not need Google account. They also do not need
                to have access to your Google Form or spreadsheet. When a
                request is sent, recipient will receive an email which includes:
                One-click Approve & One-click Reject button: to approve/reject
                immediately. Approve/Reject & Comment button: to open BoloForms
                Website where you can approve/reject & give comment on the
                request.
              </div>
            </div>
            <div className="items" onClick={()=>show(11)}>
              <b>How many recipients can I add?</b>
              <div className="desc">
                There is no limit to the number of recipients. However, be aware
                that the higher number of recipients is, the quicker your emails
                quota may run out.
              </div>
            </div>
            <div className="items" onClick={()=>show(12)}>
              <b>Can Form Respondent or Recipients edit a form submission?</b>
              <div className="desc">
                You can have option to allow Form Respondents to edit their own
                submission. However, Recipients can not edit submissions from
                Respondent.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
