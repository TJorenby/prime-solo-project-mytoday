--myToday Master ToDo List--

--THINGS TO FIX--
    [] Screenshots are not saving do db
    [] Put Route is throwing a syntax error
    [] Login Takes user to Archive rather than Home. 
    [] PNG files aren't rendering on DOM

Pre-dev checklist
    [X] Custom Logo
    [X] React Calendar Build
    [X] Moment.js Build
   

--Client Side--


    HEADER (Component)
        [X] myToday Logo
        [] Avatar [if profile is built]

    FOOTER (Component)
        [] Buttons
            [X] Highlights - Routes to Highlights Page
            [] Today - Routes to Home Screen
            [X] Archives - Links to Archives
            [X] ADD Event (possibly)??
        [] Styled

    HOME SCREEN (Component)

        [] Date Display (Text - "Today Is", Function - Renders today's date in written format (Moment JS?))

        [X] Event List (map through events associated with today's date)
            [X] Sorted by Timestamp (ASC)
            [] Needs to be in scroll-able format to allow Add Event Button to render at a minimum size

            Event Component
                [X] Event Title
                [X] Timestamp
                [X] Click for details button (links to Event Details via event.id)
        [X] ADD EVENT Button (possibly on FOOTER component??)
            [] Sized According 

    NEW EVENT (Component)

        [] NEW EVENT Sub-Header (if styling permits)

        [] Timestamp (ex. 8:54a Tues, Jan 14th, 2021) 
            <form> 
            Fields
                [X] Title Input (NOT NULL)
                    [X] Sends Text Value
                [X] Event Description (can be null)
                    [X] Sends Text Value
                [X] Select Image for Upload (can be null)
                    [X] Sends Image URL
                [X] Make Highlight (checkbox star or heart icon?? - Refer to Feedback project)
                    [X] Boolean 
            Buttons
                [X] Submit - Sends to db
                    [X] title
                    [X] description
                    [X] imageUrl
                    [X] user_id (gather form Login)
                    [X] timestamp
                    [X] highlight
                [X] Cancel - Clears Fields and returns to HOME SCREEN
            </form>

    ARCHIVE (Component)
        ARCHIVE Sub-Header
            [] Suprise Me! Button
                [] Pulls a Random Event from the DB as a result
        
        Calendar
            [] Calendar Component
            [] Is Collapse-able?
            [] Clicking Dates will render associated results

        Results
            [] Sorted by Timestamp (ASC)
            [] Timestamp will act as title
            [] "Click to View" button pulls up EVENT component   

    EVENT (Component)
        DATE BAR
            [] Displayes Date of the Entry
            [] Left and Right scrolls between dates
        BODY
            [] Timestamp of Entry
            [] Title
            [X] Description
            [] L and R buttons (scroll between entries on associated date)
            [X] Make Highlight (checkbox star or heart icon?? - Refer to Feedback project)

            BUTTONS
                [X] DELETE - Removes entry from DB
                    [] Alters (Event deleted!) 
                    [] Scrolls forward to next entry
                [X] EDIT - Can Edit following (MAY NEED NEW COMPONENT ENTIRELY FOR THIS)
                    [] Highlight 
                    [X] Description
                       
    

    HIGHLIGHTS
        Title Sub-header (HIGHLIGHTS On This Day)

        Highlight Buttons
            [] Last Week (Seven days from today's date)
            [] Last Month (Day of the prior month)
            [] Last Year (today dd/mm/(previous year))

        Events (will display HIGHLIGHTED events from dates)
            [] Only Render if Highlight === T
            [] Render the BODY component from EVENT component
            [] L an R to swipe between events on Highlight Date (Carousel)

    

    

    

    


    


               
        


    

    

