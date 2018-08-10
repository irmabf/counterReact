   Counters
                     ________________
                     |              |
                     | Counters     |
                     |______________|

        Data     ⬇️⬇️⬇️                 ⬆️⬆️⬆️ Events
  Counter
  Controlled component _______________
                      |               |
                      |  Counter      |
                      |  Controlled   |
                      |    component  |
                      |_______________|


The counter components needs to be a controlled component, so whenever the data
needs to be modified this component needs to raise and event and have it´s parent
take care  of the data.