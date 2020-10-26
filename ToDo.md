--myToday Master ToDo List--

--10/25 TO DO--

    --Styling--
        [X] Complete styling on Camera Component
        [X] Style Login page
        [X] Header and Footer line breaks
        [] Highlight Component
        [X] Search Component in Archive - Drawer and spy glass?
        [] Style the Modal
        [X] Event page - Fix height


    --Other--
        [X] Database Assembly
        [] Revise intro
        [] Choose Intro song
        [] Tech used?
        [] Thanks
        [] Most challenging triumph




--THINGS TO FIX--
    [X] Screenshots are not saving do db
    [X] Put Route is throwing a syntax error
    [] Login Takes user to Archive rather than Home. 
    [] PNG files aren't rendering on DOM
    [] Hitting "Cancel" on Choose File crashes the app. 
    [X] Camera Images and Files are not consistent sizing. 
    [X] Logo

Pre-dev checklist
    [X] Custom Logo
    [X] React Calendar Build
    [X] Moment.js Build
   

--Client Side--


    HEADER (Component)
        [X] myToday Logo
        [] Avatar [if profile is built]

    FOOTER (Component)
        [X] Buttons
            [X] Highlights - Routes to Highlights Page
            [X] Today - Routes to Home Screen
            [X] Archives - Links to Archives
            [X] ADD Event (possibly)??
        [X] Styled

    HOME SCREEN (Component)

        [] Date Display (Text - "Today Is", Function - Renders today's date in written format (Moment JS?))

        [X] Event List (map through events associated with today's date)
            [X] Sorted by Timestamp (ASC)
            [X] Needs to be in scroll-able format to allow Add Event Button to render at a minimum size

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
            [X] Calendar Component
            [] Is Collapse-able?
            [X] Clicking Dates will render associated results

        Results
            [X] Sorted by Timestamp (ASC)
            [X] Timestamp will act as title
            [X] "Click to View" button pulls up EVENT component   

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

    

    

    

    


    


               
        


    

    

