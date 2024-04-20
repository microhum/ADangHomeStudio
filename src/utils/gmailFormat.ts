import { useCallback } from "react";

interface GmailFormatProps {
    gmail?: string,
    subject?: string,
    body?: string
}

const GmailFormat = ({gmail="adanghomestudio@gmail.com", subject="Course Reservation", body="Dear A Dang Home Studio, I would like to ..."}: GmailFormatProps) => {
    const emailFormat: string =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${gmail}&su=${subject}&body=${body}`

    return emailFormat
}

export default GmailFormat
