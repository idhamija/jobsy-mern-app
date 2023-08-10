import { useEffect } from 'react'
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa'
import { Loading } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/StatsContainer'
import StatItem from '../../components/StatItem'

const Stats = () => {
  const { stats, showStats, isLoading } = useAppContext()

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  useEffect(() => {
    showStats()
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <Loading center />
  }
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default Stats
