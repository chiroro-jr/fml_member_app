import UpdateForm from './UpdateForm'
import { MemberService } from '../utils/members.serverice'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Member() {
    const memberService = new MemberService()
    const { memberId } = useParams()
    const [member, setMember] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        memberService.getMember(memberId).then((member) => {
            setMember(member)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return null
    }

    if (!member) {
        return null
    } else {
        return (
            <div className="update-member">
                <UpdateForm title="View and edit member" member={member} />
            </div>
        )
    }
}

export default Member
