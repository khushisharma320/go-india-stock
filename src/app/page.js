
import DisscussionFourm from './components/DisscussionFourm';
import MarketStories from './components/MarketStories';


export default function Home() {
  return (
    <>
    <div className="flex justify-center md:gap-0 lg:gap-4 xlg:gap-6 relative h-full">
    <DisscussionFourm props="hidden md:block"/>
    <MarketStories props="hidden md:block"/>
    </div>
    </>
  )
}
