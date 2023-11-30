import Stack from '@mui/material/Stack';

import { Link as RouterLink } from 'react-router-dom'
import Chip from '@mui/material/Chip'

const Categories = () => {
    const bookCategories = [
        { id: 'c1', name: 'adult' },
        { id: 'c2', name: 'anthologies' },
        { id: 'c3', name: 'art' },
        { id: 'c4', name: 'audiobooks' },
        { id: 'c5', name: 'biographies' },
        { id: 'c6', name: 'body' },
        { id: 'c7', name: 'business' },
        { id: 'c8', name: 'children' },
        { id: 'c9', name: 'comics' },
        { id: 'c10', name: 'contemporary' },
        { id: 'c11', name: 'cooking' },
        { id: 'c12', name: 'crime' },
        { id: 'c13', name: 'engineering' },
        { id: 'c14', name: 'entertainment' },
        { id: 'c15', name: 'fantasy' },
        { id: 'c16', name: 'fiction' },
        { id: 'c17', name: 'food' },
        { id: 'c18', name: 'general' },
        { id: 'c19', name: 'health' },
        { id: 'c20', name: 'history' },
        { id: 'c21', name: 'horror' },
        { id: 'c22', name: 'investing' },
        { id: 'c23', name: 'literary' },
        { id: 'c24', name: 'literature' },
        { id: 'c25', name: 'manga' },
        { id: 'c26', name: 'media-help' },
        { id: 'c27', name: 'memoirs' },
        { id: 'c28', name: 'mind' },
        { id: 'c29', name: 'mystery' },
        { id: 'c30', name: 'nonfiction' },
        { id: 'c31', name: 'religion' },
        { id: 'c32', name: 'romance' },
        { id: 'c33', name: 'science' },
        { id: 'c34', name: 'self' },
        { id: 'c35', name: 'spirituality' },
        { id: 'c36', name: 'sports' },
        { id: 'c37', name: 'superheroes' },
        { id: 'c38', name: 'technology' },
        { id: 'c39', name: 'thrillers' },
        { id: 'c40', name: 'travel' },
        { id: 'c41', name: 'women' },
        { id: 'c42', name: 'young' }
    ]

    return (
        <Stack direction='row' gap={1} spacing={0.1} sx={{ flexWrap: 'wrap', p: 2, justifyContent: 'center' }}>
            {
                bookCategories.map((category) => (
                    <Chip sx={{ mb: 2, textTransform: 'capitalize' }} component={RouterLink} to={`/categories/${category.name}`} key={category.id} variant='outlined' color='warning' size='small' label={category.name} clickable />
                ))
            }
        </Stack>
    )
}
export default Categories