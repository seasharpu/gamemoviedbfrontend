import { Dropdown } from "./Dropdown"
import { Song } from "./Song"

export const Soundtrack = ({ soundtracklist, dropdown, styling }:
    {
        soundtracklist: any[],
        dropdown: boolean
        styling: string
    }) => {

    let soundtrack_list_styling = "w-full flex flex-col items-center"

    return (
        <div className={styling}>
            {dropdown === true ?
                (
                    <Dropdown
                        styling={soundtrack_list_styling}
                        dropped_down={false}
                        dropped_elements={
                            soundtracklist.map((track, index) => (
                                <div key={index} className="w-4/5 pt-2">
                                    <Song title={track.title} composer={track.composer} thumbnail={track.thumbnail}></Song>
                                </div>
                            ))
                        }
                    ></Dropdown>
                ) : (
                    <div className={soundtrack_list_styling}>
                        {soundtracklist.map((track, index) => (
                            <div key={index} className="w-4/5 pt-2">
                                <Song title={track.title} composer={track.composer} thumbnail={track.thumbnail}></Song>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )


}