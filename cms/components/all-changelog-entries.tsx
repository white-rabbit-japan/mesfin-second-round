import { useEffect, useState } from 'react'
import { Grid, Card, Spinner, Stack, Text } from '@sanity/ui'
import { useClient } from 'sanity'
import { FaExchangeAlt } from 'react-icons/fa'

const AllChangelogEntries = () => {
  const [entries, setEntries] = useState([])
  const client = useClient({ apiVersion: '2021-10-21' })

  useEffect(() => {
    const loadEntries = async () => {
      const changelogEntries = await client.fetch(
        '*[_type == "changelogEntry" && !(_id in path("drafts.**"))] | order(date desc)'
      )

      setEntries(changelogEntries)
    }
    loadEntries()
  }, [client])

  return (
    <Grid columns={1} gap={2}>
      {entries.length === 0 ? (
        <Spinner style={{ marginTop: 4 }} />
      ) : (
        entries.map((e: any, index: number) => (
          <Card
            key={index}
            padding={3}
            border={true}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <FaExchangeAlt size={21} style={{ marginRight: 12 }} />
            <Stack>
              <Text>{e.date}</Text>
            </Stack>
          </Card>
        ))
      )}
    </Grid>
  )
}

export default AllChangelogEntries
