import styles from '../styles/Home.module.css'
import SideBar from '../components/Sidebar'
import ConversationList from '../components/ConversationList'
import ChatView from '../components/ChatView'
import { DiscordContext } from "../context/context";
import { useContext, useEffect  } from "react";
import { useRouter } from 'next/router';

export default function Home() {
  
  const { roomName, currentAccount, connectWallet } =
    useContext(DiscordContext);
    const router = useRouter();

  console.log(currentAccount)
  
  useEffect(() => {
    if (!currentAccount) {
      router.push('/auth');
    }
  }, [currentAccount, router]);

  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />
      </div>
    </div>
  )
}
