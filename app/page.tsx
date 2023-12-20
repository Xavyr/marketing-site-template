import { FirstFeature } from '@/components/first-feature'
import { Intro } from '@/components/intro'
import { Contact } from '@/components/contact'
import { SecondFeature } from '@/components/second-feature'
import { SectionDivider } from '@/components/section-divider'


export default function Home() {
  return (
    <main className='flex flex-col items-center' >
      <Intro />
      <SectionDivider />
      <FirstFeature />
      <SectionDivider />
      <SecondFeature />
      <SectionDivider />
      <Contact />
    </main>
  )
}
