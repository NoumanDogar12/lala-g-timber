export interface DeliveryArea {
  name: string
  zones: string[]
}

export const deliveryAreas: DeliveryArea[] = [
  {
    name: 'Central Lahore',
    zones: ['Ravi Road', 'Data Darbar', 'Anarkali', 'The Mall', 'Lakshmi Chowk', 'Railway Station', 'Old City', 'Lohari Gate'],
  },
  {
    name: 'DHA & Cantt',
    zones: ['DHA Phase 1-9', 'Lahore Cantt', 'Walton Road', 'Fortress Stadium', 'Sarwar Road'],
  },
  {
    name: 'Gulberg & Commercial',
    zones: ['Gulberg I-III', 'Liberty Market', 'MM Alam Road', 'Main Boulevard', 'Firdous Market'],
  },
  {
    name: 'Residential Areas',
    zones: ['Model Town', 'Johar Town', 'Township', 'Iqbal Town', 'Sabzazar', 'Garden Town', 'Faisal Town'],
  },
  {
    name: 'Industrial Areas',
    zones: ['Kot Lakhpat', 'Sundar Industrial Estate', 'Quaid-e-Azam Industrial Estate', 'Bund Road Industrial Area'],
  },
  {
    name: 'Outskirts & Suburbs',
    zones: ['Multan Road', 'Raiwind Road', 'Bedian Road', 'Ferozpur Road', 'GT Road', 'Sagian Bypass'],
  },
]
