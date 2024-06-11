import { Dropdown } from "./Dropdown"
import { Song } from "./Song"

export const Soundtrack = ({ soundtracklist, dropdown, styling }:
    {
        soundtracklist: any[],
        dropdown: boolean
        styling: string
    }) => {

    let dropdown_styling = "w-full flex flex-col items-center"

    return (
        <div className={`w-full ${styling}`}>
            {dropdown === true ?
                (
                    <Dropdown
                        styling={dropdown_styling}
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
                    <div className={dropdown_styling}>
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