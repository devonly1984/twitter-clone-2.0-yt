import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  const { data: session } = useSession()

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        src="https://links.papareact.com/drq"
        className=" h-10 w-10"
        alt="Twitter Logo"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="BookMarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        Icon={UserIcon}
        onClick={session ? signOut : signIn}
        title={session ? 'Sign Out' : 'Sign in'}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar
