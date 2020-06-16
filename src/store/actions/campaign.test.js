import {buildCampaign} from './campaign'
import Campaign from '../../classes/Campaign/Campaign';


describe('campaign reducer', () => {
    it('should campaign instance', () => {
        expect(buildCampaign({
            "campaign_instance_id": "d66f1c0f-1a74-4143-a5ed-827e7e14207c",
            "campaign_name": "What Happens in Vegas",
            "team_instances": [
                {
                    "steps": [
                        {
                            "status": "done",
                            "step_id": "f89e8d85-ebe8-41f7-80a3-1601bfaee1d7",
                            "step_name": "Custom Cryptographic Protocol"
                        },
                        {
                            "status": "in_progress",
                            "step_id": "cf635f90-b9b4-4f94-a875-2ebec87e7e47",
                            "step_name": "Browser Extensions"
                        }
                    ],
                    "team_id": "523e0ec4-2676-4882-a6f1-8c54b47651c9",
                    "team_name": "firmwareTsunami"
                },
                {
                    "steps": [
                        {
                            "status": "in_progress",
                            "step_id": "748b2f8f-1b39-4cba-b2a1-7e88ecf882f3",
                            "step_name": "Trusted Developer Utilities"
                        }
                    ],
                    "team_id": "ad179d21-cd3d-4b47-9292-fa4e2d6f05fc",
                    "team_name": "rootWhirlwinds"
                },
                {
                    "steps": [
                        {
                            "status": "done",
                            "step_id": "b2ff2668-27db-4666-be29-a6a914d9432b",
                            "step_name": "SID-History Injection"
                        },
                        {
                            "status": "done",
                            "step_id": "a052eaa8-6eba-48c6-b38d-15438866a5fe",
                            "step_name": "Man in the Browser"
                        },
                        {
                            "status": "done",
                            "step_id": "9fd5461f-cd2a-49e7-a1bf-1e0f61505a65",
                            "step_name": "Group Policy Modification"
                        },
                        {
                            "status": "done",
                            "step_id": "d230eeb1-22d5-4e8d-bd73-06012812abd8",
                            "step_name": "Scripting"
                        },
                        {
                            "status": "done",
                            "step_id": "e8a58658-890f-486f-9443-7c5a24431be2",
                            "step_name": "BITS Jobs"
                        },
                        {
                            "status": "done",
                            "step_id": "02be25b4-817b-42e5-9a65-e75ebbb8b1f3",
                            "step_name": "Process Hollowing"
                        },
                        {
                            "status": "done",
                            "step_id": "2ad05f5a-5069-4c9b-8292-7f84264497c6",
                            "step_name": "Data Compressed"
                        },
                        {
                            "status": "in_progress",
                            "step_id": "c952e648-0338-4bfe-9dd3-306274f507dd",
                            "step_name": "CMSTP"
                        },
                        {
                            "status": "not_started",
                            "step_id": "100e1c87-6c67-4821-b5b6-792229b9ae62",
                            "step_name": "DLL Search Order Hijacking"
                        }
                    ],
                    "team_id": "2a733178-4620-4404-85ee-1df2b89d5358",
                    "team_name": "browserPanthers"
                },
                {
                    "steps": [
                        {
                            "status": "in_progress",
                            "step_id": "50feefea-4f87-41e6-92f9-a60703877529",
                            "step_name": "Control Panel Items"
                        },
                        {
                            "status": "not_started",
                            "step_id": "0a40eb47-2a6d-4585-889c-88534d97a4b9",
                            "step_name": "File System Permissions Weakness"
                        },
                        {
                            "status": "not_started",
                            "step_id": "688764ee-feb0-4353-b6ea-ac8488f928b0",
                            "step_name": "Exploitation for Privilege Escalation"
                        },
                        {
                            "status": "not_started",
                            "step_id": "6e48a7ce-9f4d-4fdc-9d8c-207cf14c4ef8",
                            "step_name": "Keychain"
                        },
                        {
                            "status": "not_started",
                            "step_id": "e309027b-01e2-419e-aeb6-c91f8544ed1d",
                            "step_name": "Regsvr32"
                        }
                    ],
                    "team_id": "8d64dab0-0b36-4c97-a8bb-d8e0325511d0",
                    "team_name": "logicWarriors"
                },
                {
                    "steps": [
                        {
                            "status": "done",
                            "step_id": "7cf47e21-d0b7-45c0-88ee-3e084cf5c92a",
                            "step_name": "Command-Line Interface"
                        },
                        {
                            "status": "in_progress",
                            "step_id": "3b21362e-ff61-4348-8d40-094fe7b4fe54",
                            "step_name": "Web Shell"
                        },
                        {
                            "status": "not_started",
                            "step_id": "60e6051a-97bc-4fe5-8a64-93a1ea34f202",
                            "step_name": "Modify Existing Service"
                        }
                    ],
                    "team_id": "e202d363-803a-49b2-a724-afb20913358e",
                    "team_name": "workstationHurricanes"
                }
            ]
        })).toBeInstanceOf(Campaign)
    });
});